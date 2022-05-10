import React from 'react';
import { useHistory } from 'react-router-dom';

import { Layout, Form, Card, Input, Button, Typography } from 'antd';

import ParentNavTopBar from '../../common/ParentNavTopBar';
import ChildCard from '../../common/ChildCard';
import ParentDashboardBack from '../../common/ParentDashboardBack';

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
    <Layout className="edit-players">
      <ParentNavTopBar selected="settings" />
      <Layout className="content">
        <div className="top-section">
          <ParentDashboardBack />
          <Title className="title" level={2}>
            Settings
          </Title>
        </div>
        <Layout className="children" style={{ flexFlow: 'row wrap' }}>
          {props.parent.children.map(child => (
            <ChildCard
              name={child.Name}
              AvatarURL={child.AvatarURL}
              update="SETTINGS"
            />
          ))}
        </Layout>

        <Layout className="children">
          <Card className="child-card-form" bordered={false}>
            <div className="card-center">
              <h3>Change Email or Password</h3>
              <Form
                {...layoutSettings}
                form={form}
                name="change-family-settings"
                onFinish={onFinish}
              >
                <div className="col">
                  <Form.Item
                    label="Old Email"
                    name="email"
                    onChange={handleChange}
                    rules={[
                      {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                      },
                      {
                        required: true,
                        message: 'Please enter an email address!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </div>
                <div className="col">
                  <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your old password!',
                      },
                    ]}
                    hasFeedback
                  >
                    <Input type="password" />
                  </Form.Item>
                </div>
                <div className="col">
                  <Form.Item
                    name="email"
                    label="New Email"
                    onChange={handleChange}
                    rules={[
                      {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                      },
                      {
                        required: true,
                        message: 'Please enter an email address!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </div>
                <div className="col">
                  <Form.Item
                    label="Re-Enter New Email"
                    name="email"
                    onChange={handleChange}
                    rules={[
                      {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                      },
                      {
                        required: true,
                        message: 'Please enter an email address!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </div>
                <div className="card-bottom">
                  <Button className="save-btn" htmlType="submit" disabled>
                    Update
                  </Button>
                </div>
              </Form>
            </div>
          </Card>
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
