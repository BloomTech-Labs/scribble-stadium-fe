import React from 'react';
import { Layout, Typography, Card } from 'antd';
import { Link } from 'react-router-dom';

import { PlusCircleFilled } from '@ant-design/icons';
import ChildCard from '../../common/ChildCard';
import ParentNavSider from '../../common/ParentNavSider';
import { useSelector } from 'react-redux';
import tempImg from './temp-img.png';
import tempImg2 from './temp-img-2.png';
import tempImg3 from './temp-img-3.png';

const { Title } = Typography;

const ParentDashboard = props => {
  const userInfo = useSelector(state => state.parent);
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
          </div>
          <div>
            <img src={tempImg3} alt="temp-img" style={{ width: '100vw' }} />
          </div>
        </Layout>
      </Layout>
    </>
  );
};

export default ParentDashboard;
