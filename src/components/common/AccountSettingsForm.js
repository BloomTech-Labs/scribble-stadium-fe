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
    <form className="acct-settings-form" onSubmit={e => handleSubmit(e)}>
      {/*<div class="form-half">*/}
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
          <button className="edit-button" disabled={disabled ? true : false}>
            Change email
          </button>
        </div>
      </div>
      {/*</div>*/}

      {/*<div class="form-half">*/}
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
          <button className="edit-button" disabled={disabled ? true : false}>
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
