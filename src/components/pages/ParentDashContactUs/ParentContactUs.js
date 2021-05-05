import React from 'react';
import Header from '../../common/Header';
import { Layout, Typography, Form, Input, Button } from 'antd';
import emailjs from 'emailjs-com';

const { Title } = Typography;
const { TextArea } = Input;

const ParentContactUs = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    //reset the form values
    e.target.reset();
  }
  return (
    <>
      <Header displayMenu={false} />
      <Layout>
        <Title className="title" style={{ color: '#0267C1' }} level={1}>
          Contact Us
        </Title>
        <div id="contact" className="block contactBlock">
          <div className="container-fluid">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onSubmit={sendEmail}
            >
              <Form.Item name="name" type="text">
                <Input placeholder="Full Name" />
              </Form.Item>
              <Form.Item name="email" type="email">
                <Input placeholder="Email Address" />
              </Form.Item>
              <Form.Item name="telephone">
                <Input placeholder="Phone (Optional)" />
              </Form.Item>
              <Form.Item name="subject" type="text">
                <Input placeholder="Subject" />
              </Form.Item>
              <Form.Item name="message">
                <TextArea placeholder="Message" />
              </Form.Item>
              <Form.Item>
                <Button
                  type="submit"
                  htmlType="submit"
                  className="my-button"
                  size="large"
                  value="Send Message"
                  onSubmit={sendEmail}
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
