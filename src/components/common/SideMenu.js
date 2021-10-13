import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Dropdown } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const ChildsMenu = () => {
  return (
    <Menu
      style={{
        clipPath:
          'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 20% 100%, 50% 75%, 0% 75%)',
        position: 'fixed',
        left: 10,
        top: '18vh',
        height: 325,
        width: 300,
        backgroundColor: '#6ceae6',
      }}
    >
      <Menu.Item key="0" style={{ color: '#231f20' }}>
        <a href="https://www.antgroup.com">Home</a>
      </Menu.Item>
      <Menu.Item key="1" style={{ color: '#231f20' }}>
        <a href="https://www.aliyun.com">My Gallery</a>
      </Menu.Item>
      <Menu.Item key="2" style={{ color: '#231f20' }}>
        Help
      </Menu.Item>
      <Menu.Item key="3" style={{ color: '#231f20' }}>
        Change User
      </Menu.Item>
      <Menu.Item key="4" style={{ color: '#231f20' }}>
        Log Out
      </Menu.Item>
    </Menu>
  );
};

const SideMenu = () => {
  return (
    <Dropdown overlay={<ChildsMenu />} trigger={['click']}>
      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        <SmileOutlined
          style={{
            position: 'fixed',
            top: '50vh',
            zIndex: '3',
            fontSize: 50,
            height: 50,
            width: 50,
            backgroundColor: '#231f20',
            color: '#FFD854',
          }}
        />
      </a>
    </Dropdown>
  );
};

export default SideMenu;
