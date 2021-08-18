import React, { Fragment, useEffect, useState } from 'react';
import { Button, Input, Layout, Menu, Upload } from 'antd';
import { toggleNavCollapsed } from './Context/StorybookManager.Actions';
import { useStore } from './Context/StorybookManager.Context';
import { useParams } from 'react-router-dom';
import sampleData from './SampleData';

const { Content, Sider } = Layout;

const AudiobookDetail = () => {
  const [detail, setDetail] = useState({});
  const [editMode, setEditMode] = useState(false);
  const { id } = useParams();
  const [{}, dispatch] = useStore();

  useEffect(() => {
    setDetail(getDetailsByItem(id));
    dispatch(toggleNavCollapsed(true));
  }, []);

  // This function is temporary searching through sample data.
  // Once api is linked function will need to change.
  const getDetailsByItem = inputId => {
    return sampleData.find(stry => stry.id === parseInt(inputId));
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const updateFileData = e => {
    e.preventDefault();
    setDetail({ ...detail, [e.target.name]: e.target.value });
  };

  console.table(detail);
  return (
    <Fragment>
      <Layout className="storybookDetails">
        <Content className="storybookDetails__content">
          <div className="header">
            <div
              className="header__top"
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <h2>{detail.trackName}</h2>
              <Button onClick={toggleEditMode}>
                {editMode ? 'Save' : 'Edit'} Details
              </Button>
            </div>
            <hr />
          </div>
          <div className="details">
            <DetailObject
              label="Story Name"
              data={detail.story}
              edit={editMode}
              inputParams={{
                name: 'story',
                value: detail.story,
                onChange: updateFileData,
              }}
            />
            <DetailObject
              label="Author"
              data={detail.author}
              edit={editMode}
              inputParams={{
                name: 'author',
                value: detail.author,
                onChange: updateFileData,
              }}
            />
            <DetailObject
              label="Chapter"
              data={detail.chapter}
              edit={editMode}
              inputParams={{
                name: 'chapter',
                value: detail.chapter,
                onChange: updateFileData,
              }}
            />
            <DetailObject
              label="Episode"
              data={detail.episode}
              edit={editMode}
              inputParams={{
                name: 'episode',
                value: detail.episode,
                onChange: updateFileData,
              }}
            />
          </div>

          <div className="prompt">
            <div className="prompt__header">
              <h3>Story Prompt</h3>
              <hr />
            </div>
            <div className="prompt__upload">
              <Upload.Dragger>
                <p>Click or drag file to this area to upload</p>
              </Upload.Dragger>
            </div>
          </div>
          <div className="audio">
            <div className="audio__header">
              <h3>Audio File</h3>
              <hr />
            </div>
            <div className="audio__upload">
              <Upload.Dragger>
                <p>Click or drag file to this area to upload</p>
              </Upload.Dragger>
            </div>
          </div>
        </Content>
      </Layout>
    </Fragment>
  );
};

const DetailObject = ({ label, data, edit = false, inputParams }) => {
  if (edit)
    return (
      <div className="details__input">
        <h4>{label}</h4>
        <Input size="large" {...inputParams} placeholder={data} />
      </div>
    );
  else
    return (
      <div className="details__item">
        <h4>{label}</h4>
        <p>{data}</p>
      </div>
    );
};

export default AudiobookDetail;
