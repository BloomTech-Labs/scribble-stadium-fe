import React, { useState } from 'react';
import { Modal } from 'antd';

export default function ChangeSubinfoModal(props) {
  const [visible, setVisible] = useState(false);

  const handleExit = () => {
    props.setVisible(false);
    setVisible(true);
  };

  const cancel = () => {
    props.setVisible(false);
  };

  return <Modal className="subInfoModal"></Modal>;
}
