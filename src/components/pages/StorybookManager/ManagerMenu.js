import React from 'react';
import { Layout, Menu } from 'antd';
import { useStore } from './Context/StorybookManager.Context';
import {
  changeListViewMode,
  toggleNavCollapsed,
} from './Context/StorybookManager.Actions';

const { SubMenu } = Menu;

const ManagerMenu = () => {
  const [{ listView, isNavCollapsed }, dispatch] = useStore();

  const listViewHandler = view => {
    dispatch(changeListViewMode(view));
  };

  const onCollapse = () => {
    dispatch(toggleNavCollapsed(!isNavCollapsed));
  };

  return (
    <Layout.Sider
      collapsible
      collapsed={isNavCollapsed}
      onCollapse={onCollapse}
      theme="light"
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={[listView]}
        defaultOpenKeys={[listView === 'Titles' ? 'sub1' : '']}
        theme="light"
      >
        <SubMenu key="sub1" title="Audiobooks">
          <Menu.Item key="Titles" onClick={() => listViewHandler('Titles')}>
            Episodes
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Layout.Sider>
  );
};

export default ManagerMenu;
