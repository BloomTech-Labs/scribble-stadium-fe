import React from 'react';
import { Modal, Button } from 'antd';

import { progressInfo } from '../../utils/helpers';
import ProgressChart from '../../components/common/ProgressChart';

const LargeModal = props => {
  const handleClose = () => {
    props.setVisible(false);
  };

  return (
    <>
      <Modal
        visible={props.visible}
        width={'90%'}
        onCancel={handleClose}
        onOk={handleClose}
        cancelButtonProps={{ disabled: true }}
        title={props.title}
        footer={[
          <Button key="submit" type="primary" onClick={handleClose}>
            OK
          </Button>,
        ]}
      >
        {props.modalType === 'progress' ? (
          <div>
            <h2>{progressInfo.welcome}</h2>
            <h3>{progressInfo.explanation}</h3>
            <h4>{progressInfo.isTitle}</h4>
            {progressInfo.is.map(is => (
              <ul>
                <li>{is}</li>
              </ul>
            ))}
            <h4>{progressInfo.isNotTitle}</h4>
            {progressInfo.isNot.map(isNot => (
              <ul>
                <li>{isNot}</li>
              </ul>
            ))}
            <ProgressChart ChildID={props.id} />
          </div>
        ) : (
          <h2>Image from gamification will be here</h2>
        )}
      </Modal>
    </>
  );
};

export default LargeModal;
