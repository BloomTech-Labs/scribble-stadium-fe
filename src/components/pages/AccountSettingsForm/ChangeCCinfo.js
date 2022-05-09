import React, { useState } from 'react';
import { Modal } from 'antd';

const ChangeCCinfoModal = props => {
  const [visible, setVisible] = useState(false);
  const handleExit = () => {
    props.setVisible(false);
    setVisible(true);
  };

  const cancel = () => {
    props.setVisible(false);
  };

  return (
    <Modal
      className="CCinfoModal"
      visible={props.visible}
      width={'99%'}
      onCancel={cancel}
      onOk={handleExit}
    >
      <h2 className="Title-Text">Edit Payment Information</h2>
      <form className="payment-Form"></form>
    </Modal>
  );
};
