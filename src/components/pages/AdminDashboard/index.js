import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button, Layout, PageHeader } from 'antd';
// import Sider from 'antd/lib/layout/Sider';

import ModerationTools from './ModerationTools';
import DevTools from './DevTools';

const { Content } = Layout;

const AdminDashboard = props => {
  const { push } = useHistory();

  const homePageHandler = () => {
    push('/child/dashboard');
  };

  return (
    <Layout className="moderation-page">
      {/* <Layout> */}
      <PageHeader>
        <h1>Story Squad</h1>
      </PageHeader>
      <Layout>
        {/* <Sider>
        Would links to fast scroll to specific sections be useful?
        </Sider> */}

        <Content>
          <Button type="default" onClick={homePageHandler}>
            Back to Home Page
          </Button>
          <ModerationTools component={ModerationTools} />
          <DevTools component={DevTools} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
