import React, { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import AudiobookList from './AudiobookList';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const AudiobookManager = () => {
  const [listView, setListView] = useState(() => 'Collection');
  const history = useHistory();

  const listViewHandler = view => {
    history.push('/admin/audiobooks');
    setListView(view);
  };

  const goToAddAudiobook = () => {
    history.push('/admin/audiobooks/add');
  };
  return (
    <>
      <h1>Audiobook Manager</h1>
      <Layout>
        <Layout>
          <Sider>
            <Menu
              mode="inline"
              defaultSelectedKeys={['2']}
              defaultOpenKeys={['sub2']}
              style={{ height: '100%' }}
            >
              <Menu.Item key="sub1" onClick={goToAddAudiobook}>
                Add Audiobook
              </Menu.Item>
              <SubMenu key="sub2" title="Audiobook List">
                <Menu.Item
                  key="2"
                  onClick={() => listViewHandler('Collection')}
                >
                  Collections
                </Menu.Item>
                <Menu.Item key="3" onClick={() => listViewHandler('Titles')}>
                  Titles
                </Menu.Item>
                <Menu.Item key="4" onClick={() => listViewHandler('Authors')}>
                  Authors
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content>
            <Switch>
              <Route exact path="/admin/audiobooks/add">
                <h2>Add Audiobooks</h2>
              </Route>
              <Route
                path="/admin/audiobooks"
                render={() => <AudiobookList listView={listView} />}
              />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default AudiobookManager;
