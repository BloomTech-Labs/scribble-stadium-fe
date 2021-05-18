import React, { useEffect, useState } from 'react';

import { Button, Card, Form, Input } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

import { useOktaAuth } from '@okta/okta-react';

import { updateChildData, getChild } from '../../api';

function ChildForm(props) {
  const { authState } = useOktaAuth();
  const [form] = Form.useForm();
  const [isSaveBtnDisabled, setIsSaveBtnDisabled] = useState(() => true);

  const onChange = () => {
    if (isSaveBtnDisabled) {
      setIsSaveBtnDisabled(() => false);
    }
  };

  const onFinish = values => {
    const changes = values;

    // IF the PIN has not changed, do not reset it.
    if (changes.PIN === '0000') {
      delete changes.PIN;
    }

    updateChildData(authState, { ...values }, props.ID)
      .then(res => {
        setIsSaveBtnDisabled(() => true);

        getChild(authState, props.ID).then(child => {
          console.log(child);
          props.updateChild({ ...child });
        });
      })
      .catch(err => {
        console.log(err);
      });
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
            Name: props.Name,
            CharacterName: props.CharacterName,
            Email: props.Email,
            PIN: '0000',
          }}
          name="control-hooks"
          layout="inline"
          onChange={onChange}
          onFinish={onFinish}
        >
          <div className="col">
            <Form.Item name="CharacterName" label="Character Name">
              <Input />
            </Form.Item>
            <Form.Item name="PIN" label="PIN">
              <Input type="password" className="pin" />
            </Form.Item>
          </div>
          <div className="col">
            <Form.Item name="Name" label="Name">
              <Input />
            </Form.Item>
            <Form.Item name="Email" label="Email Address">
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
