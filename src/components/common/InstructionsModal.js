import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'antd';

const InstructionsModal = props => {
  const { modalVisible, style, instructions, showOkButton } = props;
  const [visible, setVisible] = useState(modalVisible);

  const handleCancel = e => {
    setVisible(false);
  };

  const handleOk = e => {
    console.log(e);
    setVisible(false);
  };

  useEffect(() => {
    setVisible(modalVisible);
  }, [modalVisible]);

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
        <p style={style}>{instructions}</p>
        {showOkButton && (
          <Button onClick={handleCancel} className="accept-button">
            I Accept!!!
          </Button>
        )}
      </Modal>
    </>
  );
};

export default InstructionsModal;
