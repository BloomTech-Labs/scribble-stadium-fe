import React from 'react';
import { Tabs } from 'antd';
import RenderWordCloud from '../pages/WordCloud/WordCloud';

const { TabPane } = Tabs;

const ParentDashboardNav = props => {
  return (
    <Tabs defaultActiveKey="1" centered>
      <TabPane tab="Word Cloud" key="1">
        <div className="renderWordCloud">
          <RenderWordCloud />
        </div>
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  );
};
export default ParentDashboardNav;
