import React from 'react';
import { useHistory } from 'react-router-dom';

import { Layout, Form, Card, Input, Button, Typography, Row, Col } from 'antd';

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

      <Row className="card">
        <Col>
          <Row className="title">
            <h4>Change Email or Password</h4>
          </Row>
          <Form
            {...layoutSettings}
            form={form}
            name="change-family-settings"
            onFinish={onFinish}
          >
            <Row className="form-inputs">
              <Col>
                <label htmlFor="oldEmail">Enter Old Email</label>
                <br />
                <input
                  id="oldEmail"
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
                  className="contact-form-input"
                />
              </Col>
              <Col>
                <label htmlFor="oldPassword">Enter Old Password</label>
                <br />
                <input
                  id="oldPassword"
                  name="password"
                  rules={[
                    {
                      required: true,
                      type: 'password',
                      message: 'Please input your old password!',
                    },
                  ]}
                  hasFeedback
                  className="contact-form-input"
                />
              </Col>
            </Row>
            <Row className="form-inputs">
              <Col>
                <label htmlFor="newEmail">Enter New Email</label>
                <br />
                <input
                  id="newEmail"
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
                  className="contact-form-input"
                />
              </Col>
              <Col>
                <label htmlFor="ReEnterNewEmail">Re-Enter New Email</label>
                <br />
                <input
                  id="ReEnterNewEmail"
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
                  className="contact-form-input"
                />
              </Col>
            </Row>
            <Row>
              <input
                type="submit"
                size="large"
                value="UPDATE"
                htmlType="submit"
                className="contact-form-submit-btn"
              ></input>
            </Row>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default connect(
  state => ({
    parent: state.parent,
  }),
  {}
)(FamilySettings);
