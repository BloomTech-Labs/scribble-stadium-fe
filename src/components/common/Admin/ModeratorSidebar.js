import {
  AppstoreOutlined,
  //   DashboardOutlined,
  SettingOutlined,
  NotificationOutlined,
  UserOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';

import { Menu, Badge } from 'antd';

function getItem(label, key, icon, children, type) {
  return { key, icon, children, label, type };
}

const items = [
  //   getItem(
  //     <a href="/moderator" target="" rel="noopener noreferrer">
  //       Moderator Dashboards
  //     </a>,
  //     'link',
  //     <DashboardOutlined />
  //   ),
  getItem(
    <a href="/moderator" target="" rel="">
      Story Manager
    </a>,
    'link',
    <AppstoreOutlined />,
    [getItem('Option A', 'A'), getItem('Option B', 'B')]
  ),
  getItem('User Management', 'sub1', <UsergroupAddOutlined />),
  getItem(
    'Notifications',
    'sub2',
    <Badge dot>
      <NotificationOutlined style={{ fontSize: 18 }} />
    </Badge>
  ),
  getItem('Account', 'sub3', <UserOutlined />, [
    getItem('Option 1', '1'),
    getItem('Option 2', '2'),
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
