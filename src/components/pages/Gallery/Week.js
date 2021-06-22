import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Modal } from 'antd';
import PDFViewer from './SourceMaterial/PDFViewer';

const Week = props => {
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
    <div>
      <h3 className="h3">{`Week ${''}`}</h3>
      <h3 className="h3" onClick={showModal}>
        View Prompt
      </h3>
      <Modal
        title="Source Material"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <PDFViewer />
      </Modal>
    </div>
  );
};

export default Week;
