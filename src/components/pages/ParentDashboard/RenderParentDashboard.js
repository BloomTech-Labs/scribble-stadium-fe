import React from 'react';
import { Layout, Typography, Card } from 'antd';
import { Link } from 'react-router-dom';

import { PlusCircleFilled } from '@ant-design/icons';
import ChildCard from '../../common/ChildCard';
import ParentNavTopBar from '../../common/ParentNavTopBar';
import ProgressCharts from '../../pages/ProgressCharts/ProgressCharts';

const { Title } = Typography;

const ParentDashboard = props => {
  return (
    <>
      <Layout className="parent-dashboard">
        <Layout>
          <div>
            <ParentNavTopBar/>
          </div>
          <div className="progress-container">
            <ProgressCharts/>
          </div>
          <div className="children-container">
            <Layout className="children" style={{ flexFlow: 'row wrap' }}>
              {props.parent.children.map((child, i) => (
                <ChildCard
                  key={child.ID}
                  id={child.ID}
                  name={child.Name}
                  AvatarURL={child.AvatarURL}
                  update="PROGRESS"
                />
              ))}
              <Card>
                <h2>
                  <Link to="/parent/add-child">
                    <PlusCircleFilled /> Add a Child
                  </Link>
                </h2>
              </Card>
            </Layout>
          </div>
        </Layout>
      </Layout>
    </>
  );
};

export default ParentDashboard;
