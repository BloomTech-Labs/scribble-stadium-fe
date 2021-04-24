import React, { useState } from 'react';
import { Layout, Menu, Typography, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import { connect } from 'react-redux';
import { global } from '../../state/actions';

const { Header, Sider } = Layout;
const { Title } = Typography;

const ParentNavTopBar = props => {
  const { authService } = useOktaAuth();
  const { push } = useHistory();
  const switchUsers = e => {
    props.clearUsers();
    push('/');
  };

  const [drawerIsVisible, setDrawerIsVisible] = useState(false);

  return (
    <nav className="parent-nav-top-bar" theme="light">
      <a href="">
        <Title
          className="title"
          style={{ color: '#0267C1', margin: 0 }}
          level={1}
        >
          STORY SQUAD
        </Title>
      </a>
      <Button onClick={() => setDrawerIsVisible(true)}>
        <MenuOutlined />
      </Button>
      <Drawer
        title="Welcome Back!"
        placement="right"
        closable={true}
        onClose={() => setDrawerIsVisible(false)}
        visible={drawerIsVisible}
      >
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
      </Drawer>
    </nav>
  );
};

export default connect(null, {
  clearUsers: global.clearUsers,
})(ParentNavTopBar);
