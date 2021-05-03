import React from 'react';
import { Layout, Typography, Card } from 'antd';
import { Link } from 'react-router-dom';
import { Collapse } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
import { useInView } from 'react-intersection-observer';

import { CaretRightOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import tempImg from './temp-img.png';
import tempImg2 from './temp-img-2.png';
import tempImg3 from './temp-img-3.png';
import ContactUs from '../SupportPage/ContactUsForm';

const { Title } = Typography;

const ParentDashboard = props => {
  const userInfo = useSelector(state => state.parent);
  const expandFAQ = React.createRef();
  const { Panel } = Collapse;
  return (
    <>
      <Layout className="parent-dashboard">
        <Layout>
          <header className="parent-dash-header">
            <Title className="title" style={{ color: 'white' }} level={1}>
              STORY SQUAD
            </Title>
            <h4 className="welcome-back-text">Welcome Back {userInfo.name} </h4>
          </header>

          <div className="stats-container">
            <div className="progress-charts-text">
              <h3 className="progress-charts-text">Progress Charts</h3>
            </div>
            <div className="empty-stats-box"></div>
          </div>

          <div className="master-children-container">
            <div className="children-container-1">
              <div className="players-text">
                <h2>Players</h2>
              </div>
              <Layout className="children">
                <img src={tempImg} alt="temp-img" />
              </Layout>
            </div>

            <div className="children-container-2">
              <div className="add-a-child-2">
                <h2>
                  <Link to="/parent/add-child">
                    <PlusCircleFilled /> Add a Child
                  </Link>
                </h2>
              </div>
              <Layout className="children" style={{ flexFlow: 'row wrap' }}>
                <img src={tempImg2} alt="temp-img" />
              </Layout>
            </div>

            <div className="children-container-3">
              <Layout className="children">
                <img src={tempImg} alt="temp-img" />
              </Layout>
            </div>

            <div className="children-container-4">
              <Layout className="children" style={{ flexFlow: 'row wrap' }}>
                <img src={tempImg2} alt="temp-img" />
              </Layout>
            </div>
          </div>
          <div>
            <img src={tempImg3} alt="temp-img" style={{ width: '100vw' }} />
          </div>
        </Layout>

        <div className="FAQ-container" ref={expandFAQ}>
          <h1>Frequently Asked Questions</h1>
          <Collapse
            bordered={false}
            defaultActiveKey={['0']}
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
            className="site-collapse-custom-collapse"
          >
            <Panel
              header={
                <h3>
                  Question 1 goes here and this is just extra placeholder text?
                </h3>
              }
              key="1"
              className="site-collapse-custom-panel"
            >
              <p>Answer for 1 goes here and of course more placeholder text.</p>
            </Panel>
            <Panel
              header={
                <h3>
                  Question 2 goes here and this is just extra placeholder text?
                </h3>
              }
              key="2"
              className="site-collapse-custom-panel"
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.
                Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                sapiente officiis modi at sunt excepturi expedita sint?
              </p>
            </Panel>
            <Panel
              header={
                <h3>
                  Question 3 goes here and this is just extra placeholder text?
                </h3>
              }
              key="3"
              className="site-collapse-custom-panel"
            >
              <p>
                Answer for 3 goes here. Unfortunately, this is where the place-
                holder text has to stop.
              </p>
            </Panel>
            <Panel
              header={
                <h3>
                  Question 4 goes here and this is just extra placeholder text?
                </h3>
              }
              key="4"
              className="site-collapse-custom-panel"
            >
              <p>
                Answer for 4 goes here. Unfortunately, this is where the place-
                holder text has to stop.
              </p>
            </Panel>
          </Collapse>
        </div>
        <div className="contact-form-container">
          <h1>Contact Us</h1>
          <ContactUs />
        </div>
      </Layout>
    </>
  );
};

export default ParentDashboard;
