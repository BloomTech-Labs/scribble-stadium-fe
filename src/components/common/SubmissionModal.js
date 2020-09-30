import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';

const SubmissionModal = props => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = e => {
    setVisible(false);
  };

  const handleOk = e => {
    console.log(e);
    setVisible(false);
  };

  useEffect(() => {
    showModal();
  }, []);

  return (
    <>
      <Modal
        className="submission-modal"
        visible={visible}
        keyboard={true}
        width={'70%'}
        onCancel={handleCancel}
        zIndex={2000}
        onOk={handleOk}
        cancelButtonProps={{ disabled: true }}
        footer={null}
        closeIcon={null}
      >
        <p>{props.instructions}</p>
      </Modal>
    </>
  );
};

export default SubmissionModal;
