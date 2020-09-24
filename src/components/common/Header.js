import React from 'react';

import { Link } from 'react-router-dom';
import { Button, Dropdown, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const ChildMenu = ({ authService, ...props }) => {
  return (
    <Menu {...props}>
      <Menu.Item key="1">
        <Link to="/child/dashboard">Home</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link>Help</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link>Change User</Link>
      </Menu.Item>
      <Menu.Item key="4" onClick={() => authService.logout()}>
        Log Out
      </Menu.Item>
    </Menu>
  );
};

const Header = ({ authService = null, displayMenu = true }) => {
  return (
    <div className="hero">
      {displayMenu && (
        <Dropdown
          overlay={<ChildMenu authService={authService} />}
          trigger={['click']}
          className="menu-button"
        >
          <Button icon={<MenuOutlined />} type="text" />
        </Dropdown>
      )}
      <h1 className="header-text">STORY SQUAD</h1>
    </div>
  );
};
export default Header;
