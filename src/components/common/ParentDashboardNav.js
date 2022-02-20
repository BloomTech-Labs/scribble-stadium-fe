import React from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const ParentDashboardNav = props => {
  return (
    <Tabs defaultActiveKey="1" centered>
      <TabPane tab="Word Cloud" key="1">
        <div className="Word Cloud">
          <h2>WORD CLOUD</h2>
        </div>
      </TabPane>

      <TabPane tab="Crop Cloud" key="2">
        <h2>CROP CLOUD</h2>
      </TabPane>

      <TabPane tab="Player" key="4">
        <h2>PLAYER INFORMATION</h2>
      </TabPane>

      <TabPane tab="Player Progress" key="5">
        <h2>PLAYER PROGRESS</h2>
      </TabPane>

      <TabPane tab="Settings" key="6">
        <h2>SETTINGS</h2>
      </TabPane>
    </Tabs>
  );
};
export default ParentDashboardNav;
