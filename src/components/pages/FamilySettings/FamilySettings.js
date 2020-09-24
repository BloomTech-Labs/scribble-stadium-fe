import React, { useState } from 'react';
import ParentNavSider from '../../common/ParentNavSider';
import { useOktaAuth } from '@okta/okta-react';

import { useHistory } from 'react-router-dom';

import { Layout, Form, Input, Button, Typography } from 'antd';

const { Title } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const FamilySettings = props => {
  const [form] = Form.useForm();
  const { push } = useHistory();

  const handleChange = (value, e) => {
    console.log('this is value', value);
  };

  const onFinish = values => {
    console.log('values', values);

    push('/parent-dashboard');
  };

  return (
    <Layout className="parent-dashboard">
      <ParentNavSider selected="settings" />

      <Layout className="content">
        <Title className="title" style={{ color: '#0267C1' }} level={1}>
          Settings
        </Title>
        <Layout>kids cards</Layout>
        <h2>Change Email or Password</h2>

        <Form
          {...layout}
          form={form}
          name="change-family-settings"
          onFinish={onFinish}
        >
          <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
            <Form.Item
              name="email"
              onChange={handleChange}
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                { required: true, message: 'Please enter an email address!' },
              ]}
            >
              <Input placeholder="Enter New Email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your old password!',
                },
              ]}
              hasFeedback
            >
              <Input.Password placeholder="Enter old Password" />
            </Form.Item>
            <Form.Item
              name="email"
              onChange={handleChange}
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                { required: true, message: 'Please enter an email address!' },
              ]}
            >
              <Input placeholder="Enter New Email" />
            </Form.Item>
            <Form.Item
              name="email"
              onChange={handleChange}
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                { required: true, message: 'Please enter an email address!' },
              ]}
            >
              <Input placeholder="Re-enter New Email" />
            </Form.Item>
          </Form.Item>
          <Form.Item wrapperCol={{ span: 20, offset: 8 }}>
            <Button
              style={{ backgroundColor: '#007AFF', color: 'white' }}
              type="primary"
              size="large"
              htmlType="submit"
            >
              Update
            </Button>
          </Form.Item>
        </Form>
        {/* </Content> */}
      </Layout>
    </Layout>
  );
};

export default FamilySettings;
