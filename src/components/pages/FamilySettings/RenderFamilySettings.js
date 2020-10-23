import React from 'react';
import { useHistory } from 'react-router-dom';

import { Layout, Form, Input, Button, Typography } from 'antd';

import ParentNavSider from '../../common//ParentNavSider';
import ChildCard from '../../common/ChildCard';
import { connect } from 'react-redux';

const { Title } = Typography;

const layoutSettings = {
  labelCol: { span: 12 },
  wrapperCol: { span: 16 },
};

const FamilySettings = props => {
  const { push } = useHistory();

  const handleChange = (value, e) => {
    console.log('this is value', value);
  };

  const [form] = Form.useForm();

  const onFinish = values => {
    push('/parent-dashboard');
  };

  return (
    <Layout className="parent-dashboard add-child">
      <ParentNavSider selected="settings" />
      <Layout className="content">
        <Title className="title" style={{ color: '#0267C1' }} level={1}>
          Settings
        </Title>
        <Layout className="children" style={{ flexFlow: 'row wrap' }}>
          {props.parent.children.map(child => (
            <ChildCard
              name={child.Name}
              AvatarURL={child.AvatarURL}
              update="SETTINGS"
            />
          ))}
        </Layout>

        <Layout className="settings-form">
          <h2 className="h2-family-settings">Change Email or Password</h2>
          <Form
            {...layoutSettings}
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
                disabled
              >
                Update
              </Button>
            </Form.Item>
          </Form>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default connect(
  state => ({
    parent: state.parent,
  }),
  {}
)(FamilySettings);
