import React, { useState } from 'react';

import { Button, Card, Form, Input } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

function ChildForm(props) {
  const [form] = Form.useForm();
  const [isSaveBtnDisabled, setIsSaveBtnDisabled] = useState(() => true);

  const onChange = () => {
    if (isSaveBtnDisabled) {
      setIsSaveBtnDisabled(() => false);
    }
  };

  const onFinish = values => {
    console.log('Submitted:');
    console.log(values);
  };

  return (
    <Card className="child-card-form" bordered={false}>
      <div className="card-top">
        <div className="avatar-container">
          <img src={props.AvatarURL} alt="avatar" className="avatar-img" />
          {/* This button allows parents to change their kid's avatar */}
          <Button icon={<EditOutlined />} className="edit-btn" />
        </div>
        <Button icon={<DeleteOutlined />} className="delete-btn">
          Delete
        </Button>
      </div>
      <div className="card-center">
        <Form
          form={form}
          initialValues={{
            name: props.Name,
            characterName: 'Pinky Winky',
            pin: '0000',
            email: 'placeholder@maildrop.cc',
          }}
          name="control-hooks"
          layout="inline"
          onChange={onChange}
          onFinish={onFinish}
        >
          <div className="col">
            <Form.Item name="characterName" label="Character Name">
              <Input />
            </Form.Item>
            <Form.Item name="pin" label="PIN">
              <Input type="password" className="pin" />
            </Form.Item>
          </div>
          <div className="col">
            <Form.Item name="name" label="Name">
              <Input />
            </Form.Item>
            <Form.Item name="email" label="Email Address">
              <Input />
            </Form.Item>
          </div>
          <div className="card-bottom">
            <Button
              htmlType="submit"
              className="save-btn"
              disabled={isSaveBtnDisabled}
            >
              Save Changes
            </Button>
          </div>
        </Form>
      </div>
    </Card>
  );
}

export default ChildForm;
