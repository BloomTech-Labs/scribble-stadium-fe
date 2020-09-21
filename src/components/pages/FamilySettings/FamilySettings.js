import React, { useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';

import PropTypes from 'prop-types';

import { useHistory } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { Layout, Menu, Form, Input, Button, Select, Typography } from 'antd';

import '../AddChild/AddChild.less';

const { Sider } = Layout;
const { Title } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const FamilySettings = props => {
  const { authState, authService } = useOktaAuth();
  const { push } = useHistory();

  const [newChild, setNewChild] = useState({
    Name: '',
    GradeLevelID: '',
    PIN: '',
    AvatarURL: '',
    IsDyslexic: false,
  });

  const handleChange = (value, e) => {
    console.log('this is value', value);
  };

  const [form] = Form.useForm();

  const onFinish = values => {
    console.log('values', values);

    push('/parent-dashboard');
  };

  return (
    <Layout className="container">
      <Sider className="sider" theme="light">
        <div className="logo">
          <Title className="welcome" level={4}>
            Welcome Back
          </Title>
        </div>
        <Menu className="menu" mode="inline" defaultSelectedKeys={['settings']}>
          <Menu.Item key="dashboard">
            <Link to="/parent-dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="settings">
            <Link to="/parent-settings">Parent Settings</Link>
          </Menu.Item>
          <Menu.Item key="help">
            <Link to="/help">Help</Link>
          </Menu.Item>
          <Menu.Item onClick={() => authService.logout()} key="logout">
            Log out
          </Menu.Item>
        </Menu>
      </Sider>

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
