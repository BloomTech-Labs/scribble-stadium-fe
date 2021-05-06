import React from 'react';
import Header from '../../common/Header';
import { Layout, Typography } from 'antd';
import emailjs from 'emailjs-com';

const { Title } = Typography;

const ParentContactUs = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ghtt1eb',
        'template_pk79pf6',
        e.target,
        'user_pcz2czADtm5ala9BrkUqS'
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
  }

  return (
    <>
      <Header displayMenu={false} />
      <Layout>
        <Title className="title" style={{ color: '#0267C1' }} level={1}>
          Contact Us
        </Title>
        <div className="container">
          <form className="containerForm" onSubmit={sendEmail}>
            <div className="singleItem">
              <label>
                <p>Name</p>
              </label>
              <input type="text" name="name" />
            </div>

            <div className="singleItem">
              <label>
                <p>Email</p>
              </label>
              <input type="email" name="email" />
            </div>

            <div className="singleItem">
              <label>
                <p>Subject</p>
              </label>
              <input type="text" name="subject" />
            </div>

            <div className="singleItem">
              <label>
                <p>Message</p>
              </label>
              <textarea name="message" />
            </div>

            <div className="btn">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default ParentContactUs;
