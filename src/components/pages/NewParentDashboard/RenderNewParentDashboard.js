import React from 'react';
import { Layout } from 'antd';
import ParentNavTopBar from '../../common/ParentNavTopBar';
import NewProgressCharts from '../../common/NewProgressCharts';
import AccountSettings from '../AccountSettings/AccountSettingsContainer';

const RenderNewParentDashboard = props => {
  return (
    <>
      <Layout className="newparent-dashboard">
        <ParentNavTopBar />

        <Layout>
          <div className="progress-container">
            <NewProgressCharts />
          </div>
          <div>
            <AccountSettings />
          </div>
        </Layout>
      </Layout>
    </>
  );
};

export default RenderNewParentDashboard;
