import React, { useState } from 'react';
import { Modal } from 'antd';
import Header from '../../common/Header';

const AddAudiobookModal = props => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Header displayMenu={false} />
      {
        <Modal
          className="profile-modal"
          visible={visible}
          onClick={handleClick}
          onCancel={handleCancel}
          centered={true}
          footer={null}
        ></Modal>
      }
    </>
  );
};

export default AddAudiobookModal;
