import {
  AppstoreOutlined,
  DashboardOutlined,
  SettingOutlined,
  DollarOutlined,
  NotificationOutlined,
  UserOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';

import { Menu, Badge } from 'antd';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';

function getItem(label, key, icon, children, type) {
  return { key, icon, children, label, type };
}

const items = [
  getItem(
    <a href="/admin" target="" rel="noopener noreferrer">
      Moderator Dashboards
    </a>,
    'link',
    <DashboardOutlined />
  ),

  getItem(
    <a href="/admin/storymanager" target="" rel="">
      Story Manager
    </a>,
    'link',
    <AppstoreOutlined />,
    [getItem('Option 5', '5'), getItem('Option 6', '6')]
  ),

  getItem('User Management', 'sub3', <UsergroupAddOutlined />),
  getItem(
    'Notifications',
    'sub4',
    <Badge dot>
      <NotificationOutlined style={{ fontSize: 18 }} />
    </Badge>
  ),
  getItem('Account', 'sub5', <UserOutlined />, [
    getItem('Option 1', '1'),
    getItem('Option 2', '2'),
  ]),
  getItem('Finance Center', 'sub1', <DollarOutlined />, [
    getItem('Option 3', '3'),
    getItem('Option 4', '4'),

    getItem('Submenu', 'sub2', null, [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
    ]),
  ]),
  getItem('Moderator Center', 'sub6', <SettingOutlined />, [
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
  ]),
];

const AdminSideBar = () => {
  const onClick = e => {
    console.log('click ', e);
  };

  return (
    <Menu
      onClick={onClick}
      style={{
        width: 320,
      }}
      // defaultSelectedKeys={['5']}
      // defaultOpenKeys={['sub5']}
      mode="inline"
      items={items}
    />
  );
};

export default AdminSideBar;
