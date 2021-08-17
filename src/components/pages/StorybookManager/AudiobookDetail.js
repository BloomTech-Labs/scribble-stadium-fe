import React, { Fragment, useEffect } from 'react';
import { Layout } from 'antd';
import { toggleNavCollapsed } from './Context/StorybookManager.Actions';
import { useStore } from './Context/StorybookManager.Context';

const { Content, Sider } = Layout;

const AudiobookDetail = () => {
  const [{}, dispatch] = useStore();
  useEffect(() => {
    dispatch(toggleNavCollapsed(true));
  }, []);
  return (
    <Fragment>
      <Layout>
        <Content></Content>
        <Sider></Sider>
      </Layout>
    </Fragment>
  );
};

export default AudiobookDetail;
