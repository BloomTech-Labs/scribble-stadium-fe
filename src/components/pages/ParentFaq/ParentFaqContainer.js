import React from 'react';
import { Layout, Card, Row, Col, Button } from 'antd';
import img1 from './img1.png';
import ParentNavTopBar from '../../common/ParentNavTopBar';

const ParentFaqContainer = () => {
  return (
    <>
      <Layout className="parent-dashboard">
        <ParentNavTopBar />
        <div className='"site-card-border-less-wrapper"'>
          <Row className="card">
            <Col span={16} className="col-btn">
              <Row>
                <h4 style={{ color: '#878D93', fontWeight: '700' }}>
                  FREQUENTLY ASKED QUESTIONS
                </h4>
              </Row>
              <div className="btn-group">
                <Row>
                  <Button type="default" style={{ backgroundColor: '#fbfbfb' }}>
                    Game Play
                  </Button>
                  <Button type="default" style={{ backgroundColor: '#fbfbfb' }}>
                    Child Profile Management
                  </Button>
                </Row>
                <Row>
                  <Button type="default" style={{ backgroundColor: '#fbfbfb' }}>
                    Account Setting
                  </Button>
                  <Button type="default" style={{ backgroundColor: '#fbfbfb' }}>
                    Technical Support
                  </Button>
                </Row>
              </div>
            </Col>
            <Col
              span={8}
              type="flex"
              style={{ alignItems: 'center' }}
              justify="center"
            >
              <img
                style={{ position: 'absolute', overflow: 'scroll' }}
                alt="example"
                src={img1}
              />
            </Col>
          </Row>
        </div>

        <div className="site-card-border-less-wrapper">
          <Card title="Game Play + Content" className="card" bordered={false}>
            <p>1. STAR: Is Story Squad safe and appropriate for my children?</p>
            <p>2. What type of content is available?</p>
            <p>3. What's the weekly schedule for the game?</p>
            <p>
              4. What happen if a phase ends and my child forgot to participate
              in time?
            </p>
            <p>5. How are partners assigned and opposing teams selected?</p>
            <p>6. What is Story Squad privacy policy?</p>
            <p>7. How does the gallery and leaderboard work?</p>
            <p>
              8. I'm a child's book author. How do I get my book on Story Squad?
            </p>
          </Card>
        </div>
        <div className="site-card-border-less-wrapper">
          <Card
            title="Child Profile Management"
            className="card"
            bordered={false}
          >
            <p>1. How do I add/edit my child's profile PIN?</p>
            <p>2. How do I create my child's profile?</p>
            <p>3. How do I change my child's avatar?</p>
            <p>4. How do I change my child's profile name?</p>
            <p>5. How do I delete my child's profile?</p>
            <p>6. How do I receive updates on my child's progress?</p>
          </Card>
        </div>
        <div className="site-card-border-less-wrapper">
          <Card title="Account Settings" className="card" bordered={false}>
            <p>1. STAR: I forget my password. What should I do?</p>
            <p>
              2. How do I update my parent email for my Story Squad
              subscription?
            </p>
          </Card>
        </div>
        <div className="site-card-border-less-wrapper">
          <Card title="Technical Support" className="card" bordered={false}>
            <p>1. STAR: I forgot my password. What should I do?</p>
            <p>2. The Story Squard app isn't responding. What should I do?</p>
            <p>3. What devices does Story Squard support?</p>
            <p>4. Is an internet connection required to use Story Squard?</p>
            <p>5. How do I add multiple devices?</p>
            <p>
              6. Will my children's progress sync across all devices registered
              to their account?
            </p>
          </Card>
        </div>
      </Layout>
    </>
  );
};

export default ParentFaqContainer;
