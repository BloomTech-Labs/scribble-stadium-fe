import React from 'react';
import { Layout, Card } from 'antd';
import ParentNavTopBar from '../../common/ParentNavTopBar';
import ProgressCharts from '../ProgressCharts/ProgressCharts';


const NewParentDashboard = props => {
  return (
    <>
      <Layout className="parent-dashboard">
        <ParentNavTopBar />

        <Layout>
          <div className="progress-container">
            <ProgressCharts />
          </div>

        </Layout>
      </Layout>
    </>
  );
};

export default NewParentDashboard;