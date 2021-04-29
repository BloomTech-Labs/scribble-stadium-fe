import React, { useState } from 'react';
import { Layout, Menu, Typography, Drawer, Button } from 'antd';
import {
  MenuOutlined,
  DesktopOutlined,
  SettingOutlined,
  QuestionOutlined,
  UserSwitchOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import { connect } from 'react-redux';
import { global } from '../../state/actions';

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
        title={
          props.selected
            ? props.selected.charAt(0).toUpperCase() + props.selected.slice(1)
            : 'Welcome Back!'
        }
        placement="right"
        closable={true}
        visible={drawerIsVisible}
        onClose={() => setDrawerIsVisible(false)}
      >
        <Menu
          className="menu"
          mode="inline"
          defaultSelectedKeys={[props.selected]}
        >
          <Menu.Item key="dashboard" icon={<DesktopOutlined />}>
            <Link to="/parent/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="settings" icon={<SettingOutlined />}>
            <Link to="/parent/settings">Parent Settings</Link>
          </Menu.Item>
          <Menu.Item key="help" icon={<QuestionOutlined />}>
            <Link to="/parent/help">Help</Link>
          </Menu.Item>
          <Menu.Item
            onClick={switchUsers}
            key="switch"
            icon={<UserSwitchOutlined />}
          >
            Change User
          </Menu.Item>
          <Menu.Item
            onClick={() => authService.logout()}
            key="logout"
            icon={<LogoutOutlined />}
          >
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
