import React, { useState, useEffect } from 'react';
import { Skeleton, Table, Space, Button } from 'antd';
import { useStore } from './Context/StorybookManager.Context';
import { showModalAddAudiobook } from './Context/StorybookManager.Actions';
import sampleData from './SampleData';
import { useHistory } from 'react-router-dom';

const createTableColumns = render => {
  return [
    {
      title: ' Track Name',
      dataIndex: 'trackName',
    },
    {
      title: 'Length',
      dataIndex: 'length',
      sorter: (a, b) => a.length - b.length,
    },
    {
      title: 'Chapter',
      dataIndex: 'chapter',
    },
    {
      title: 'Episode',
      dataIndex: 'episode',
    },
    {
      title: 'Story',
      dataIndex: 'story',
    },
    {
      title: 'Author',
      dataIndex: 'author',
    },
    {
      title: 'Action',
      key: 'action',
      render: render,
    },
  ];
};

const AudiobookList = () => {
  const [{ listView }, dispatch] = useStore();
  const history = useHistory();

  const [audiobookList, setAudiobookList] = useState([]);
  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    setLoadingData(true);
    setTimeout(() => {
      setAudiobookList(sampleData);
      setLoadingData(false);
    }, 1000);
  }, []);

  const handleDelete = id => {
    setLoadingData(true);
    setTimeout(() => {
      setAudiobookList(audiobookList.filter(book => book.id !== id));
      setLoadingData(false);
    }, 1000);
  };

  const handleShowAddAudiobook = () => {
    const showModal = showModalAddAudiobook();
    console.log(dispatch);
    dispatch(showModal);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>Audiobook {listView} List</h2>
        <Button onClick={handleShowAddAudiobook}>Add Audiobook</Button>
      </div>
      {loadingData
        ? [1, 2, 3, 4, 5].map((_, i) => {
            return <Skeleton key={`skeleton-${i}`} active={loadingData} />;
          })
        : listView === 'Titles' && (
            <Table
              columns={createTableColumns(book => (
                <Space size="middle">
                  <a onClick={() => handleDelete(book.id)}>Delete</a>
                  <a
                    onClick={() => history.push(`/admin/audiobooks/${book.id}`)}
                  >
                    Edit
                  </a>
                </Space>
              ))}
              dataSource={audiobookList}
            />
          )}
    </>
  );
};

export default AudiobookList;
