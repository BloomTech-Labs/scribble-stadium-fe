import React from 'react';
import { Modal } from 'antd';
import { MailOutlined } from '@ant-design/icons';

const ChangeEmailModal = props => {
  const handleClose = () => {
    props.setEmailModalVisible(false);
    props.setEmailModalVisible(true);
  };

  const handleCancel = () => {
    props.setEmailModalVisible(false);
  };

  return (
    <Modal
      visible={props.emailModalVisible}
      width={'91%'}
      onCancel={handleCancel}
      onOk={handleClose}
      cancelButtonProps={{ disabled: false }}
      bodyStyle={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#F5F5F5',
        borderRadius: '16px',
      }}
      footer={null}
    >
      <h2 className="modal-header-text">Change Email</h2>
      <form className="email-modal-form">
        <label>
          <h2 className="password-modal-label">Enter new email</h2>
        </label>

        <div className="modal-icon-input-and-button-container">
          <div className="icon-and-input-container">
            <div className="icon-container">
              <MailOutlined style={{ fontSize: '150%' }} />
            </div>
            <input
              className="acct-settings-input"
              type="text"
              name="password"
              placeholder="• • • • • • • • • • • •"
            />
          </div>
        </div>
      </form>

      <div className="modal-buttons-container">
        <div className="modal-cancel-button-container">
          <button className="modal-cancel-button">CANCEL</button>
        </div>

        <div className="modal-save-button-container">
          <button className="modal-save-button">SAVE</button>
        </div>
      </div>
    </Modal>
  );
};

export default ChangeEmailModal;
