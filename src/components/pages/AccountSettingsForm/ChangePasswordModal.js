import React, { useState } from 'react';
import { Modal } from 'antd';
import { LockOutlined } from '@ant-design/icons';

const ChangePasswordModal = props => {
  const [visible, setVisible] = useState(false);

  const handleClose = () => {
    props.setVisible(false);
    setVisible(true);
  };

  const handleCancel = () => {
    props.setVisible(false);
  };

  return (
    <Modal
      visible={props.visible}
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
      <h2 className="modal-header-text">Change Password</h2>
      <form className="password-modal-form">
        <label>
          <h2 className="password-modal-label">Enter current password</h2>
        </label>

        <div className="modal-icon-input-and-button-container">
          <div className="icon-and-input-container">
            <div className="icon-container">
              <LockOutlined style={{ fontSize: '150%' }} />
            </div>
            <input
              className="acct-settings-input"
              type="text"
              name="password"
              placeholder="• • • • • • • • • • • •"
            />
          </div>
        </div>

        <label>
          <h2 className="password-modal-label">Enter new password</h2>
        </label>

        <div className="modal-icon-input-and-button-container">
          <div className="icon-and-input-container">
            <div className="icon-container">
              <LockOutlined style={{ fontSize: '150%' }} />
            </div>
            <input
              className="acct-settings-input"
              type="text"
              name="password"
              placeholder="• • • • • • • • • • • •"
            />
          </div>
        </div>

        <label>
          <h2 className="password-modal-label">Re-enter new password</h2>
        </label>

        <div className="modal-icon-input-and-button-container">
          <div className="icon-and-input-container">
            <div className="icon-container">
              <LockOutlined style={{ fontSize: '150%' }} />
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

export default ChangePasswordModal;
