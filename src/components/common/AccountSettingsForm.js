import React, { useState } from 'react';
import { LockOutlined, MailOutlined } from '@ant-design/icons';

function AccountSettingsForm({ disabled }) {
  const [value, setValue] = useState({ email: '', password: '' });

  const handleSubmit = e => {
    e.preventDefault();
    setValue({ email: '', password: '' });
    console.log('submitted');
  };

  const onChange = e => {
    setValue(e.target.value);
  };

  return (
    //<div class="backdrop">
    <form class="acct-settings-form" onSubmit={e => handleSubmit(e)}>
      {/*<div class="form-half">*/}
      <label>
        <p class="email-label">Email Address</p>
      </label>

      <div class="icon-input-and-button-container">
        <div class="icon-and-input-container">
          <div class="icon-container">
            <MailOutlined style={{ fontSize: '150%' }} />
          </div>
          <input
            onChange={e => onChange(e)}
            disabled={disabled ? true : false}
            class="acct-settings-input"
            type="text"
            name="email"
            placeholder="caroline@gmail.com"
            value={value.email}
          />
        </div>

        <div class="edit-button-container">
          <button class="edit-button" disabled={disabled ? true : false}>
            Change email
          </button>
        </div>
      </div>
      {/*</div>*/}

      {/*<div class="form-half">*/}
      <label>
        <p class="password-label">Password</p>
      </label>

      <div class="icon-input-and-button-container">
        <div class="icon-and-input-container">
          <div class="icon-container">
            <LockOutlined style={{ fontSize: '150%' }} />
          </div>
          <input
            onChange={e => onChange(e)}
            disabled={disabled ? true : false}
            class="acct-settings-input"
            type="text"
            name="password"
            placeholder="• • • • • • • • • • • •"
            value={value.password}
          />
        </div>

        <div class="edit-button-container">
          <button class="edit-button" disabled={disabled ? true : false}>
            Change password
          </button>
        </div>
      </div>
      {/*</div>*/}
    </form>
    //</div>
  );
}

export default AccountSettingsForm;
