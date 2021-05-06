import React from 'react';
import { LockOutlined, MailOutlined } from '@ant-design/icons';

function AccountSettingsForm() {
  return (
    <div>
      <form>
        <div class="acct-settings-form-header">
          <h2>ACCOUNT SETTINGS</h2>
        </div>
        <label>
          <p class="acct-settings-form-label">Email Address</p>
        </label>
        <div class="acct-settings-input-container">
          <div class="icon-container">
            <MailOutlined style={{ fontSize: '150%' }} />
          </div>
          <input
            class="acct-settings-input"
            type="text"
            name="email"
            placeholder="caroline@gmail.com"
          />
        </div>
        <label>
          <p class="acct-settings-form-label">Password</p>
        </label>
        <div class="acct-settings-input-container">
          <div class="icon-container">
            <LockOutlined style={{ fontSize: '150%' }} />
          </div>
          <input
            class="acct-settings-input"
            type="text"
            name="password"
            placeholder="• • • • • • • • • • • •"
          />
        </div>
      </form>
    </div>
  );
}

export default AccountSettingsForm;
