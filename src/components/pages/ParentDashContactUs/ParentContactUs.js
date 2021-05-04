import React from 'react';
import Header from '../../common/Header';
import { Layout, Typography, Form, Input, Button } from 'antd';

const { Title } = Typography;
const { TextArea } = Input;

const ParentContactUs = () => {
  return (
    <>
      <Header displayMenu={false} />
      <Layout>
        <Title className="title" style={{ color: '#0267C1' }} level={1}>
          Contact Us
        </Title>
        <div id="contact" className="block contactBlock">
          <div className="container-fluid">
            {/* <div className="titleHolder">
          <h2>Get in Touch</h2>
          <p>Dolore nam rerum obcaecati fugit odio nobis Molestiae rerum</p>
        </div> */}

            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
            >
              <Form.Item
                name="fullname"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your full name!',
                  },
                ]}
              >
                <Input placeholder="Full Name" />
              </Form.Item>
              <Form.Item
                name="email"
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
                <Input placeholder="Email Address" />
              </Form.Item>
              <Form.Item name="telephone">
                <Input placeholder="Phone (Optional)" />
              </Form.Item>
              <Form.Item name="subject">
                <Input placeholder="Subject" />
              </Form.Item>
              <Form.Item name="message">
                <TextArea placeholder="Message" />
              </Form.Item>
              <Form.Item>
                <Button
                  type="default"
                  htmlType="submit"
                  className="my-button"
                  size="large"
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ParentContactUs;
