import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button, Layout, PageHeader } from 'antd';

import ModerationTools from './ModerationTools';
import DevToolsNew from './DevTools/DevToolsNew';

const { Content } = Layout;

const AdminDashboard = props => {
  const { push } = useHistory();

  const homePageHandler = () => {
    push('/child/dashboard');
  };

  return (
    <Layout className="moderation-page">
      <PageHeader>
        <h1>Story Squad</h1>
      </PageHeader>
      <Layout>
        <Content>
          <Button type="default" onClick={homePageHandler}>
            Back to Home Page
          </Button>
          <ModerationTools component={ModerationTools} />
          <DevToolsNew component={DevToolsNew} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
