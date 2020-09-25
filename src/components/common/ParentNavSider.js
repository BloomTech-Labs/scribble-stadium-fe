import React from 'react';
import { Layout, Menu, Typography } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import { connect } from 'react-redux';
import { global } from '../../state/actions';

const { Sider } = Layout;
const { Title } = Typography;

const ParentNavSider = props => {
  const { authService } = useOktaAuth();
  const { push } = useHistory();
  const switchUsers = e => {
    props.clearUsers();
    push('/');
  };
  return (
    <Sider className="sider" theme="light">
      <div className="logo">
        <Title className="welcome" level={4}>
          Welcome Back
        </Title>
      </div>
      <Menu
        className="menu"
        mode="inline"
        defaultSelectedKeys={[props.selected]}
      >
        <Menu.Item key="dashboard">
          <Link to="/parent/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="settings">
          <Link to="/parent/settings">Parent Settings</Link>
        </Menu.Item>
        <Menu.Item key="help">
          <Link to="/parent/help">Help</Link>
        </Menu.Item>
        <Menu.Item onClick={switchUsers} key="switch">
          Change User
        </Menu.Item>
        <Menu.Item onClick={() => authService.logout()} key="logout">
          Log out
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default connect(null, {
  clearUsers: global.clearUsers,
})(ParentNavSider);
