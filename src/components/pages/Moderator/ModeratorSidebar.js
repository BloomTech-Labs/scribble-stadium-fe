import {
  AppstoreOutlined,
  // DashboardOutlined,
  // SettingOutlined,
  NotificationOutlined,
  UserOutlined,
  // UsergroupAddOutlined,
} from '@ant-design/icons';

import { Menu, Badge } from 'antd';

function getItem(label, key, icon, children, type) {
  return { key, icon, children, label, type };
}

const items = [
  getItem(
    // <a href="/moderator" target="" rel="">
    <a>Moderator Center</a>,
    // 'link',
    'sub1',
    <AppstoreOutlined style={{ fontSize: 21 }} />,
    [getItem('Stories', 'A'), getItem('Drawings', 'B')]
  ),
  // An extra menu item when need it *** USE or REMOVE ***
  // getItem(
  //   'User Management',
  //   'sub2',
  //   <UsergroupAddOutlined style={{ fontSize: 21 }} />
  // ),
  getItem(
    'Notifications',
    'sub3',
    <Badge dot>
      <NotificationOutlined style={{ fontSize: 21 }} />
    </Badge>
  ),
  getItem('Profile', 'sub4', <UserOutlined style={{ fontSize: 21 }} />, [
    getItem('Option 1', '1'),
    getItem('Option 2', '2'),
  ]),
];

const ModeratorSideBarNav = () => {
  const onClick = e => {
    console.log('click ', e);
  };

  return (
    <Menu
      onClick={onClick}
      style={{
        width: 360,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};

export default ModeratorSideBarNav;
