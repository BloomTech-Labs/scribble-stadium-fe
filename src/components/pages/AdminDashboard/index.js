import React from 'react';
import { useHistory, Switch, Route } from 'react-router-dom';

import { Button, Layout } from 'antd';

import ModerationTools from './ModerationTools';
import DevToolsNew from './DevToolsNew';
import AudiobookManager from '../AudiobookManager';

const { Content, Header } = Layout;

const AdminDashboard = props => {
  const { push } = useHistory();

  const homePageHandler = () => {
    push('/child/dashboard');
  };
  const adminHomePageHandler = () => {
    push('/admin');
  };

  return (
    <Layout className="moderation-page">
      <Header className="ant-page-header">
        <h1>Story Squad</h1>

        <div>
          <Button type="default" onClick={homePageHandler}>
            Child Home
          </Button>
          <Button type="default" onClick={adminHomePageHandler}>
            Admin Home
          </Button>
        </div>
      </Header>
      <Layout>
        <Content>
          <Switch>
            <Route
              exact
              path="/admin/audiobooks"
              render={() => <AudiobookManager />}
            />
            <Route
              path="/admin"
              render={() => (
                <>
                  <ModerationTools component={ModerationTools} />
                  <DevToolsNew
                    className="dev-tools-component"
                    component={DevToolsNew}
                  />
                </>
              )}
            />
          </Switch>
          {/* <SetTime/> */}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
