import React from 'react';

import { Button, Card, Form, Input } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

function ChildForm(props) {
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log(values);
  };

  return (
    <Card className="child-card-form" bordered={false}>
      <div className="card-top">
        <div>
          <img src={props.AvatarURL} alt="avatar" className="avatar-img" />
          <Button icon={<EditOutlined />} className="edit-btn">
            Edit
          </Button>
        </div>
        <Button icon={<DeleteOutlined />} className="delete-btn">
          Delete
        </Button>
      </div>
      <div>
        <Form form={form} name="control-hooks" onFinish={onFinish}>
          <div>
            <Form.Item
              name="characterName"
              label="Character Name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="pin" label="PIN" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </div>
          <div>
            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email Address"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </div>
        </Form>
      </div>
      <div>
        <Button className="save-btn">Save Changes</Button>
      </div>
    </Card>
  );
}

export default ChildForm;
