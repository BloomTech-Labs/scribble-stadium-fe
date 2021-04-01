import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button, Layout } from 'antd';

import ModerationTools from './ModerationTools';
import DevToolsNew from './DevToolsNew';
const { Content, Header } = Layout;

const AdminDashboard = props => {
  const { push } = useHistory();

  const homePageHandler = () => {
    push('/child/dashboard');
  };

  return (
    <Layout className="moderation-page">
      <Header className="ant-page-header">
        <h1>Story Squad</h1>

        <Button type="default" onClick={homePageHandler}>
          Back to Home Page
        </Button>
      </Header>
      <Layout>
        <Content>
          <ModerationTools component={ModerationTools} />
          <DevToolsNew
            className="dev-tools-component"
            component={DevToolsNew}
          />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
