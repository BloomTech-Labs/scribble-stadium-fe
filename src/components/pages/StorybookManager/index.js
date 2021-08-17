import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.less';

import { StoreProvider } from './Context/StorybookManager.Context'; // context
import {
  initialState,
  storybookUiReducer,
} from './Context/StorybookManager.Reducer'; // UI Reducer

import Menu from './ManagerMenu';
import AudiobookList from './AudiobookList';
import AudiobookDetail from './AudiobookDetail';
import StorybookManagerModal from './StorybookManagerModal';

const { Content } = Layout;

const AudiobookManager = () => {
  // Todo: take out inline styles when StorybookManager.less is working - StorybookManager is connected to index, but wasn't having any effect on classes.
  return (
    <StoreProvider initialState={initialState} reducer={storybookUiReducer}>
      <Layout className="storybookManager" style={{ minHeight: '100vh' }}>
        <Menu />
        <Content>
          <h1>Storybook Manager</h1>
          <Switch>
            <Route path="/admin/audiobooks/:id" component={AudiobookDetail} />
            <Route exact path="/admin/audiobooks" component={AudiobookList} />
          </Switch>
        </Content>
      </Layout>
      <StorybookManagerModal />
    </StoreProvider>
  );
};

export default AudiobookManager;
