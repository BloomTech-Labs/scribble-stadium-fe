import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'antd';

const InstructionsModal = props => {
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
  let showButton = null;
  useEffect(() => {
    showModal();
    if (props.showOkButton) {
      showButton = (
        <Button onClick={handleCancel} className="accept-button">
          I Accept!!!
        </Button>
      );
    }
  }, []);

  return (
    <>
      <Modal
        className="instructions-modal"
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
        <p style={props.style}>{props.instructions}</p>
        {showButton}
      </Modal>
    </>
  );
};

export default InstructionsModal;
