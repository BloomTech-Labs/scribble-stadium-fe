import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Card } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
import ParentNavTopBar from '../../common/ParentNavTopBar';
import NewProgressCharts from '../../common/NewProgressCharts';
import NewChildCard from '../../common/NewChildCard';

const RenderNewParentDashboard = props => {
  return (
    <>
      <Layout className="parent-dashboard">
        <ParentNavTopBar />

        <Layout>
          <div className="progress-container">
            <NewProgressCharts />
          </div>
          <div className="child-container">
            <NewChildCard props={props} />
          </div>
        </Layout>
      </Layout>
    </>
  );
};

export default RenderNewParentDashboard;
