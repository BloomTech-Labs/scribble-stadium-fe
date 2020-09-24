import React from 'react';
import { Layout, Menu, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

const { Sider } = Layout;
const { Title } = Typography;

const ParentNavSider = () => {
  const { authService } = useOktaAuth();
  return (
    <Sider className="sider" theme="light">
      <div className="logo">
        <Title className="welcome" level={4}>
          Welcome Back
        </Title>
      </div>
      <Menu className="menu" mode="inline" defaultSelectedKeys={['dashboard']}>
        <Menu.Item key="dashboard">
          <Link to="/parent/dashboard">Dashboard</Link>
        </Menu.Item>
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
  );
};

export default ParentNavSider;
