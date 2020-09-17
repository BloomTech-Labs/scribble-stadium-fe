import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout, Menu, Button, Typography } from 'antd';

import { PlusCircleFilled } from '@ant-design/icons';
import Help from '../../../components/common/Help';

import '../../../styles/HomeScreen.less';


const { Content, Sider } = Layout;
const { Title } = Typography;

function HomeScreen() {
  return (
    <>
      <Layout className="container">
        <Sider className="sider">
          <div className="logo">
            <Title className="welcome" level={4}>
              Welcome Back
            </Title>
          </div>
    
          <Menu
            className="menu"
            mode="inline"
            defaultSelectedKeys={['dashboard']}
          >
            <Menu.Item key="dashboard">
              <Link to="/dashboard"></Link>Dashboard
            </Menu.Item>
            <Menu.Item key="settings">Parent Settings</Menu.Item>
            <Menu.Item key="help">
              <Link to="/help">Help</Link>
            </Menu.Item>
            <Menu.Item key="logout">Log out</Menu.Item>
          </Menu>
        </Sider>

        <Layout>
          <Title className="title" style={{ color: '#0267C1' }} level={1}>
            STORY SQUAD
          </Title>
          <Content className="content">
            <Route exact path="/help" component={Help} />
            <Route exact path="/dashboard">
              <button>
                <h2>
                  <PlusCircleFilled />
                  Add a Child
                </h2>
              </button>
            </Route>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default HomeScreen;
