import React from 'react';
import { LockOutlined, MailOutlined } from '@ant-design/icons';

function AccountSettingsForm() {
  return (
    <div>
      <form>
        <div class="acct-settings-form-header">
          <h2>Account Settings</h2>
        </div>
        <div class="acct-settings-form-label">
          <label>
            <p>Email Address</p>
          </label>
        </div>
        <div class="acct settings input container">
          <MailOutlined class="acct settings form icon" />
          <input
            class="acct settings input"
            type="text"
            name="email"
            placeholder="caroline@gmail.com"
          />
        </div>
        <div class="acct settings form label">
          <label>
            <p>Password</p>
          </label>
        </div>
        <div class="acct settings input container">
          <LockOutlined class="acct settings form icon" />
          <input
            class="acct settings input"
            type="text"
            name="password"
            placeholder="••••••••••••"
          />
        </div>
      </form>
    </div>
  );
}

export default AccountSettingsForm;
