import React from 'react';
import { Collapse, Layout, Card, Row, Col } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import img1 from './img1.png';
import ParentNavTopBar from '../../common/ParentNavTopBar';
import ParentDashboardBack from '../../common/ParentDashboardBack';

const { Panel } = Collapse;

const ParentFaqContainer = () => {
  return (
    <>
      <Layout className="parent-dashboard">
        <ParentNavTopBar />
        <div className='"site-card-border-less-wrapper"'>
          <div style={{ width: '66%', margin: '0 auto' }}>
            <ParentDashboardBack />
          </div>
          <Row className="card">
            <Col span={16} className="col-btn">
              <Row>
                <h4 style={{ color: '#878D93', fontWeight: '700' }}>
                  FREQUENTLY ASKED QUESTIONS
                </h4>
              </Row>
              <div className="btn-group">
                <Row>
                  <a href="#game-play">Game Play</a>
                  <a href="#child-profile-management">
                    Child Profile Management
                  </a>
                </Row>
                <Row>
                  <a href="#account-settings">Account Settings</a>
                  <a href="#tech-support">Technical Support</a>
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
          <Card
            title="Game Play + Content"
            className="card"
            id="game-play"
            bordered={false}
          >
            <Collapse
              bordered={false}
              defaultActiveKey={['1']}
              expandIcon={({ isActive }) => (
                <CaretRightOutlined rotate={isActive ? 90 : 0} />
              )}
            >
              <Panel
                header="Q-1. STAR: Is Story Squad safe and appropriate for my children?"
                key="1"
                className="ant-card-body"
              >
                <p>
                  <span>
                    {' '}
                    <strong>Answer :</strong>
                  </span>{' '}
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary.
                </p>
              </Panel>
              <Panel
                header="Q-2. What type of content is available?"
                key="2"
                className="ant-card-body"
              >
                <p>
                  <span>
                    {' '}
                    <strong>Answer :</strong>
                  </span>{' '}
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary.
                </p>
              </Panel>
              <Panel
                header="Q-3. What's the weekly schedule for the game?"
                key="3"
                className="ant-card-body"
              >
                <p>
                  <span>
                    {' '}
                    <strong>Answer :</strong>
                  </span>{' '}
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary.
                </p>
              </Panel>
              <Panel
                header="Q-4. What happen if a phase ends and my child forgot to participate
                in time?"
                key="4"
                className="ant-card-body"
              >
                <p>
                  <span>
                    {' '}
                    <strong>Answer :</strong>
                  </span>{' '}
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary.
                </p>
              </Panel>
              <Panel
                header="Q-5. How are partners assigned and opposing teams selected?"
                key="5"
                className="ant-card-body"
              >
                <p>
                  <span>
                    {' '}
                    <strong>Answer :</strong>
                  </span>{' '}
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary.
                </p>
              </Panel>
              <Panel
                header="Q-6. What is Story Squad privacy policy?"
                key="6"
                className="ant-card-body"
              >
                <p>
                  <span>
                    {' '}
                    <strong>Answer :</strong>
                  </span>{' '}
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary.
                </p>
              </Panel>
              <Panel
                header="Q-7. How does the gallery and leaderboard work?"
                key="7"
                className="ant-card-body"
              >
                <p>
                  <span>
                    {' '}
                    <strong>Answer :</strong>
                  </span>{' '}
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary.
                </p>
              </Panel>
              <Panel
                header="Q-8. I'm a child's book author. How do I get my book on Story Squad?"
                key="8"
                className="ant-card-body"
              >
                <p>
                  <span>
                    {' '}
                    <strong>Answer :</strong>
                  </span>{' '}
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary.
                </p>
              </Panel>
            </Collapse>
          </Card>
        </div>
        <div className="site-card-border-less-wrapper">
          <Card
            title="Child Profile Management"
            className="card"
            bordered={false}
            id="child-profile-management"
          >
            <Collapse
              bordered={false}
              defaultActiveKey={['1']}
              expandIcon={({ isActive }) => (
                <CaretRightOutlined rotate={isActive ? 90 : 0} />
              )}
            >
              <Panel
                header="Q-1. How do I add/edit my child's profile PIN?"
                key="1"
                className="ant-card-body"
              >
                <p>
                  <span>
                    {' '}
                    <strong>Answer :</strong>
                  </span>{' '}
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary.
                </p>
              </Panel>
              <Panel
                header="Q-2. How do I create my child's profile?"
                key="2"
                className="ant-card-body"
              >
                <p>
                  <span>
                    {' '}
                    <strong>Answer :</strong>
                  </span>{' '}
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary.
                </p>
              </Panel>
              <Panel
                header="Q-3. How do I change my child's avatar?"
                key="3"
                className="ant-card-body"
              >
                <p>
                  <span>
                    {' '}
                    <strong>Answer :</strong>
                  </span>{' '}
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary.
                </p>
              </Panel>
              <Panel
                header="Q-4. How do I change my child's profile name?"
                key="4"
                className="ant-card-body"
              >
                <p>
                  <span>
                    {' '}
                    <strong>Answer :</strong>
                  </span>{' '}
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary.
                </p>
              </Panel>
              <Panel
                header="Q-5. How do I delete my child's profile?"
                key="5"
                className="ant-card-body"
              >
                <p>
                  <span>
                    {' '}
                    <strong>Answer :</strong>
                  </span>{' '}
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary.
                </p>
              </Panel>
              <Panel
                header="Q-6. How do I receive updates on my child's progress?"
                key="6"
                className="ant-card-body"
              >
                <p>
                  <span>
                    {' '}
                    <strong>Answer :</strong>
                  </span>{' '}
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary.
                </p>
              </Panel>
            </Collapse>
          </Card>
        </div>
        <div className="site-card-border-less-wrapper">
          <Card
            title="Account Settings"
            className="card"
            bordered={false}
            id="account-settings"
          >
            <Collapse
              bordered={false}
              defaultActiveKey={['1']}
              expandIcon={({ isActive }) => (
                <CaretRightOutlined rotate={isActive ? 90 : 0} />
              )}
            >
              <Panel
                header="Q-1. STAR: I forget my password. What should I do?"
                key="1"
                className="ant-card-body"
              >
                <p>
                  <span>
                    {' '}
                    <strong>Answer :</strong>
                  </span>{' '}
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary.
                </p>
              </Panel>
              <Panel
                header="Q-2. How do I update my parent email for my Story Squad
                subscription?"
                key="2"
                className="ant-card-body"
              >
                <p>
                  <span>
                    {' '}
                    <strong>Answer :</strong>
                  </span>{' '}
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary.
                </p>
              </Panel>
            </Collapse>
          </Card>
        </div>
        <div className="site-card-border-less-wrapper">
          <Card
            title="Technical Support"
            className="card"
            bordered={false}
            id="tech-support"
          >
            <Collapse
              bordered={false}
              defaultActiveKey={['1']}
              expandIcon={({ isActive }) => (
                <CaretRightOutlined rotate={isActive ? 90 : 0} />
              )}
            >
              <Panel
                header="Q-1. STAR: I forgot my password. What should I do?"
                key="1"
                className="ant-card-body"
              >
                <p>
                  <span>
                    {' '}
                    <strong>Answer :</strong>
                  </span>{' '}
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary.
                </p>
              </Panel>
              <Panel
                header="Q-2. The Story Squard app isn't responding. What should I do?"
                key="2"
                className="ant-card-body"
              >
                <p>
                  <span>
                    {' '}
                    <strong>Answer :</strong>
                  </span>{' '}
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary.
                </p>
              </Panel>
              <Panel
                header="Q-3. What devices does Story Squard support?"
                key="3"
                className="ant-card-body"
              >
                <p>
                  <span>
                    {' '}
                    <strong>Answer :</strong>
                  </span>{' '}
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary.
                </p>
              </Panel>
              <Panel
                header="Q-4. Is an internet connection required to use Story Squard?"
                key="4"
                className="ant-card-body"
              >
                <p>
                  <span>
                    {' '}
                    <strong>Answer :</strong>
                  </span>{' '}
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary.
                </p>
              </Panel>
              <Panel
                header="Q-5. How do I add multiple devices?"
                key="5"
                className="ant-card-body"
              >
                <p>
                  <span>
                    {' '}
                    <strong>Answer :</strong>
                  </span>{' '}
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary.
                </p>
              </Panel>
              <Panel
                header="Q-6. Will my children's progress sync across all devices registered
                to their account?"
                key="6"
                className="ant-card-body"
              >
                <p>
                  <span>
                    {' '}
                    <strong>Answer :</strong>
                  </span>{' '}
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary.
                </p>
              </Panel>
            </Collapse>
          </Card>
        </div>
      </Layout>
    </>
  );
};

export default ParentFaqContainer;
