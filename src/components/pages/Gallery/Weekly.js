import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Modal } from 'antd';
import PDFViewer from './SourceMaterial/PDFViewer';
import { connect } from 'react-redux';

const Weekly = props => {
  const [isModalVisible, setIsModalVisible] = useState(false);

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
          <h3 className="h3">Week {props.sprint}</h3>
          <h3 className="h3" onClick={showModal}>
            View Prompt
          </h3>
          <Modal
            title="Source Material"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
          >
            <PDFViewer />
          </Modal>
        </span>
        <span className="submissions">
          <div className="sub-container">
            <img
              className="gallery-submission"
              src={props.drawing}
              alt="drawing submision"
            />
          </div>
          <div className="sub-container">
            <img
              className="gallery-submission"
              src={props.writing}
              alt="writing submision"
            />
          </div>
        </span>
      </div>
    </>
  );
};

export default connect(state => ({
  child: state.child,
}))(Weekly);
