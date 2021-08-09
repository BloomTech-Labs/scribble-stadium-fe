import React, { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.less';

import AudiobookList from './AudiobookList';

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

const AudiobookManager = () => {
  const [navCollapsed, setNavCollapsed] = useState(() => false);
  const [listView, setListView] = useState(() => 'Titles');
  const history = useHistory();

  const listViewHandler = view => {
    history.push('/admin/audiobooks');
    setListView(view);
  };

  const goToAddAudiobook = () => {
    history.push('/admin/audiobooks/add');
  };

  const onCollapse = collapsed => {
    setNavCollapsed(collapsed);
  };

  // Todo: take out inline styles when StorybookManager.less is working - StorybookManager is connected to index, but wasn't having any effect on classes.
  return (
    <Layout className="storybookManager" style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={navCollapsed}
        onCollapse={onCollapse}
        theme="light"
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={['2']}
          defaultOpenKeys={['sub1']}
          theme="light"
        >
          <Menu.Item
            key="1"
            icon={<span className="anticon ant-menu-item-icon">+</span>}
            className="ant-menu-title-content"
          >
            Add Audiobook
          </Menu.Item>
          <SubMenu key="sub1" title="Audiobooks">
            <Menu.Item key="2" onClick={() => listViewHandler('Titles')}>
              Episodes
            </Menu.Item>
            <Menu.Item key="3">Stories</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Content>
        <h1>Storybook Manager</h1>
        <Switch>
          <Route
            path="/admin/audiobooks"
            render={() => <AudiobookList listView={listView} />}
          />
        </Switch>
      </Content>
    </Layout>
  );
};

export default AudiobookManager;
