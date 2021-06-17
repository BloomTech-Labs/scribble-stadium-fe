import React, { useState } from 'react';
import { LockOutlined, MailOutlined } from '@ant-design/icons';

import ChangePasswordModal from './ChangePasswordModal';
import ChangeEmailModal from './ChangeEmailModal';

function AccountSettingsForm({ disabled }) {
  const [value, setValue] = useState({ email: '', password: '' });

  const [emailModalVisible, setEmailModalVisible] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
  };

  const onChange = e => {
    setValue(e.target.value);
  };

  return (
    <form className="acct-settings-form" onSubmit={e => handleSubmit(e)}>
      <label>
        <p className="email-label">Email Address</p>
      </label>

      <div className="icon-input-and-button-container">
        <div className="icon-and-input-container">
          <div className="icon-container">
            <MailOutlined style={{ fontSize: '150%' }} />
          </div>
          <input
            onChange={e => onChange(e)}
            disabled={disabled ? true : false}
            className="acct-settings-input"
            type="text"
            name="email"
            placeholder="caroline@gmail.com"
            value={value.email}
          />
        </div>

        <div className="edit-button-container">
          <button
            className="edit-button"
            disabled={disabled ? true : false}
            onClick={() => setEmailModalVisible(true)}
          >
            Change email
          </button>
          <ChangeEmailModal
            emailModalVisible={emailModalVisible}
            setEmailModalVisible={setEmailModalVisible}
          />
        </div>
      </div>

      <label>
        <p className="password-label">Password</p>
      </label>

      <div className="icon-input-and-button-container">
        <div className="icon-and-input-container">
          <div className="icon-container">
            <LockOutlined style={{ fontSize: '150%' }} />
          </div>
          <input
            onChange={e => onChange(e)}
            disabled={disabled ? true : false}
            className="acct-settings-input"
            type="text"
            name="password"
            placeholder="• • • • • • • • • • • •"
            value={value.password}
          />
        </div>

        <div className="edit-button-container">
          <button
            className="edit-button"
            disabled={disabled ? true : false}
            onClick={() => setVisible(true)}
          >
            Change password
          </button>
          <ChangePasswordModal visible={visible} setVisible={setVisible} />
        </div>
      </div>
    </form>
  );
}

export default AccountSettingsForm;
