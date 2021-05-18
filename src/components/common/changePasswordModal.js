import React, { useState, useEffect } from 'react';
import { Modal, Button, Input, Form } from 'antd';

function changePasswordModal() {
  // const [form] = Form.useForm();
  return (
    <div className="password-modal">
      <Modal
        centered="true"
        width="25vw"
        bodyStyle={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1>Change Password</h1>
      </Modal>
    </div>
  );
}

export default changePasswordModal;
