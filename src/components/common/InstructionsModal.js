import React from 'react';
import { Modal, Button } from 'antd';

const InstructionsModal = props => {
  const {
    modalVisible,
    style,
    instructions,
    showOkButton = false,
    handleCancel,
    handleOk,
  } = props;

  return (
    <>
      <Modal
        className="instructions-modal"
        visible={modalVisible}
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
