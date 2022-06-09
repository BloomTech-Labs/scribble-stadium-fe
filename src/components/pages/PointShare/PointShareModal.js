import { Button, Modal } from 'antd';
import { useState } from 'react';

const PointsShareModal = () => {
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
      <Button
        className="point-share-submit-button"
        type="primary"
        onClick={showModal}
      >
        New Button
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Congratulations</p>
        <p>Your story has been submited,</p>
        <p>Great Job!</p>
        <p>Its time to join your squad!</p>
      </Modal>
    </>
  );
};

export default PointsShareModal;
