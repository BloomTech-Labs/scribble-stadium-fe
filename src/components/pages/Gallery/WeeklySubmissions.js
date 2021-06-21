import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
import ContentPrompt from './SourceMaterial/ContentPrompt';
import { submissions } from '../../../state/actions';
import { getGallerySubmissionsById } from '../../../api/index';
import { connect } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';

const WeeklySubmissions = props => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { authState } = useOktaAuth();
  const [data, setDataInfo] = useState([
    {
      WritingUrl: '',
      DrawingUrl: '',
      children_id: 0,
    },
  ]);

  useEffect(() => {
    //Getting data from backend for leaderboard
    getGallerySubmissionsById(authState).then(res => {
      setDataInfo(res);

      console.log('this is res: ', res);
    });
  }, [authState]);

  // console.log('this is data: ', data[0].WritingUrl);

  // Modal functions
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div className="weekly-sub-container">
        <span className="label">
          <h3 className="h3">Week</h3>

          {/* 1 - Original h3 tag */}
          {/* <h3 className="h3"> View Prompt </h3> */}

          {/* 2 - Modal with AntDesign  */}
          <h3 className="h3" onClick={showModal}>
            {' '}
            View Prompt{' '}
          </h3>
          <Modal
            title="Source Material"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <ContentPrompt />
          </Modal>
        </span>
        <span className="submissions">
          <div className="sub-container">
            <img className="gallery-submission" src={data[0].DrawingUrl} />
          </div>
          <div className="sub-container">
            <img className="gallery-submission" src={data[0].WritingUrl} />
          </div>
        </span>
      </div>
    </>
  );
};

export default connect(state => ({
  child: state.child,
}))(WeeklySubmissions);
