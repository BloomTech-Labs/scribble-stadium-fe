import React from 'react';
import { LockOutlined, MailOutlined } from '@ant-design/icons';

function AccountSettingsForm() {
  return (
    <div class="backdrop">
      <form class="acct-settings-form">
        <div class="form-half">
          <label>
            <p class="acct-settings-form-label">Email Address</p>
          </label>

          <div class="icon-input-and-button-container">
            <div class="icon-and-input-container">
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

            <div class="edit-button-container">
              <button class="edit-button">Change email</button>
            </div>
          </div>
        </div>

        <div class="form-half">
          <label>
            <p class="acct-settings-form-label">Password</p>
          </label>

          <div class="icon-input-and-button-container">
            <div class="icon-and-input-container">
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

            <div class="edit-button-container">
              <button class="edit-button">Change password</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AccountSettingsForm;
