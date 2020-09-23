import React from 'react';
import { Layout, Menu, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

import { PlusCircleFilled } from '@ant-design/icons';

import './ParentDashboard.less';

const { Sider } = Layout;
const { Title } = Typography;

const ParentDashboard = props => {
  const { authService } = useOktaAuth();
  return (
    <>
      <Layout className="container">
        <Sider className="sider" theme="light">
          <div className="logo">
            <Title className="welcome" level={4}>
              Welcome Back
            </Title>
          </div>
          <Menu
            className="menu"
            mode="inline"
            defaultSelectedKeys={['dashboard']}
          >
            <Menu.Item key="dashboard">Dashboard</Menu.Item>
            <Menu.Item key="settings">
              <Link to="/parent/settings">Parent Settings</Link>
            </Menu.Item>
            <Menu.Item key="help">
              <Link to="/parent/help">Help</Link>
            </Menu.Item>
            <Menu.Item onClick={() => authService.logout()} key="logout">
              Log out
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout>
          <Title className="title" style={{ color: '#0267C1' }} level={1}>
            STORY SQUAD
          </Title>
          <Layout>Kids cards</Layout>
          {/* <Content className="content"> */}
          <div className="homescreen-content">
            <button>
              <h2>
                <Link to="/parent/add-child">
                  <PlusCircleFilled /> Add a Child
                </Link>
              </h2>
            </button>
          </div>
          {/* </Content> */}
        </Layout>
      </Layout>
    </>
  );
};

export default ParentDashboard;
