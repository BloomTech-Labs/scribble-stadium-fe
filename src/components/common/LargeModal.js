import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'antd';

const LargeModal = props => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Modal
        title="Hello There"
        // visible={visible}
        width={'90%'}
        // onCancel={handleCancel}
        zIndex={2000}
      >
        Hello
      </Modal>
    </>
  );
};

export default LargeModal;
