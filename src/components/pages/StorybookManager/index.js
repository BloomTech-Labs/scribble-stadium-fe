import React, { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import AudiobookList from './AudiobookList';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const AudiobookManager = () => {
  const [listView, setListView] = useState(() => 'Titles');
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
      <h1>Storybook Manager</h1>
      <Layout>
        <Layout>
          <Sider>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              style={{ height: '100%' }}
            >
              <Menu.Item key="1" onClick={() => listViewHandler('Titles')}>
                Audiobooks
              </Menu.Item>
            </Menu>
          </Sider>
          <Content>
            <Switch>
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
