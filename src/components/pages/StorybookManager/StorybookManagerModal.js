import { Button, Input, Modal, Upload } from 'antd';
import React, { useEffect, useState } from 'react';
import { toggleModal } from './Context/StorybookManager.Actions';
import { useStore } from './Context/StorybookManager.Context';
import { modalViews } from './Context/StorybookManager.Reducer';

const StorybookManagerModal = () => {
  const [{ isModalOn, modalView }, dispatch] = useStore();
  const [modalTitle, setModalTitle] = useState(() => modalView);

  useEffect(() => {
    setModalTitle(modalView);
  }, [modalView]);

  const handleCloseModal = () => {
    dispatch(toggleModal(false));
  };

  return (
    <Modal title={modalTitle} visible={isModalOn} onCancel={handleCloseModal}>
      <Input placeholder="Track Title" />
      <Input placeholder="Chapter" />
      <Input placeholder="Episode" />
      <Input placeholder="Story" />
      <Input placeholder="Author" />
      <Upload>
        <Button>Upload</Button>
      </Upload>
    </Modal>
  );
};

export default StorybookManagerModal;
