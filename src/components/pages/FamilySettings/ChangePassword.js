import React from 'react';
import ParentNavTopBar from '../../common/ParentNavTopBar';
import { Form, Input, Button, Row, Col, Layout, Card } from 'antd';

const ChangePassword = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout>
      <ParentNavTopBar style={{ position: 'absolute' }} />
      <Card
        style={{
          width: '66%',
          margin: '30px',
          borderRadius: '16px',
          position: 'relative',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%)',
        }}
      >
        <Form
          name="basic"
          labelCol={{
            span: 80,
          }}
          wrapperCol={{
            span: 20,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Col>
            <Row>
              <Col style={{ width: '50%' }}>
                <Form.Item
                  style={{ display: 'inline' }}
                  name="email"
                  label="E-mail"
                  rules={[
                    {
                      type: 'email',
                      message: 'The input is not valid E-mail!',
                    },
                    {
                      required: true,
                      message: 'Please input your E-mail!',
                    },
                  ]}
                >
                  <Input
                    style={{ borderRadius: '16px', border: '0.5px solid' }}
                  />
                </Form.Item>
              </Col>
              <Col style={{ width: '50%' }}>
                <Form.Item
                  style={{ display: 'inline' }}
                  name="password"
                  label="Old Password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <Input.Password
                    style={{ borderRadius: '16px', border: '0.5px solid' }}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col style={{ width: '50%' }}>
                <Form.Item
                  style={{ display: 'inline' }}
                  name="password"
                  label="New Password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <Input.Password
                    style={{ borderRadius: '16px', border: '0.5px solid' }}
                  />
                </Form.Item>
              </Col>

              <Col style={{ width: '50%' }}>
                <Form.Item
                  style={{ display: 'inline' }}
                  name="password"
                  label="Re-Enter New Password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <Input.Password
                    style={{ borderRadius: '16px', border: '0.5px solid' }}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Form>
      </Card>
    </Layout>
  );
};

export default ChangePassword;
