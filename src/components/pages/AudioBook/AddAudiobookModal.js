import React, { useState } from 'react';
import { Modal } from 'antd';
import Header from '../../common/Header';

<<<<<<< refs/remotes/origin/main
const AddAudiobookModal = props => {
=======
const addAudiobookModal = props => {
>>>>>>> useCallback added
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

<<<<<<< refs/remotes/origin/main
export default AddAudiobookModal;
=======
export default addAudiobookModal;
>>>>>>> useCallback added
