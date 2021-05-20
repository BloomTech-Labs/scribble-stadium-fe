import React, { useState, useEffect } from 'react';
import { Layout, Row, Col } from 'antd';
import img2 from './img2.png';
import ParentNavTopBar from '../../common/ParentNavTopBar';

const ParentContactContainer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [item, setItem] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    setItem([...item, { name: name, email: email, message: message }]);
    setName('');
    setEmail('');
    setMessage('');
  };

  useEffect(() => {
    const data = localStorage.getItem('data');
    if (data) {
      setItem(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(item));
  });
  return (
    <>
      <Layout className="parent-dashboard">
        <ParentNavTopBar />
        <div className='"site-card-border-less-wrapper"'>
          <Row className="card">
            <Col span={16}>
              <Row className="title">
                <h4 style={{ color: '#878D93', fontWeight: '700' }}>
                  CONTACT US
                </h4>
              </Row>
              <div className="description">
                <Row>
                  <p>
                    If you would like to let us know how we're doing of if you
                    are experiencing issues, contact us by filling in the form
                    bellow.
                  </p>
                </Row>
              </div>
            </Col>
            <Col
              span={8}
              type="flex"
              style={{ alignItems: 'center' }}
              justify="bottom"
            >
              <img
                style={{ position: 'absolute', overflow: 'scroll' }}
                alt="example"
                src={img2}
              />
            </Col>
          </Row>
        </div>
        <div className="form-main">
          <Row className="card">
            <form className="contact-form-container" onSubmit={handleSubmit}>
              <Row className="form-inputs">
                <Col>
                  <label for="name">Name</label>
                  <br />
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="contact-form-input"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </Col>
                <Col>
                  <label for="email">Email Address</label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="contact-form-input"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <label for="message">Message</label>
                <br />
                <textarea
                  id="message"
                  name="message"
                  className="contact-form-textarea"
                  placeholder="Write your message here"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                />
              </Row>
              <Row>
                <input
                  type="submit"
                  value="SEND MESSAGE"
                  className="contact-form-submit-btn"
                />
              </Row>
            </form>
          </Row>
        </div>
      </Layout>
    </>
  );
};

export default ParentContactContainer;
