import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route } from "react-router-dom"
import { Layout, Menu, Button, Typography } from 'antd';

import { PlusCircleFilled } from '@ant-design/icons';
import Help from '../../../components/common/Help'

import './HomeScreen.less';


const { Content, Sider } = Layout;
const { Title } = Typography;

const HomeScreen = props => {
  const { authService } = props;
  return (
    <>
      <Layout className="container">
        <Sider className="sider" theme="light">
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
            <Menu.Item key="dashboard">Dashboard</Menu.Item>
            <Menu.Item key="settings">Parent Settings</Menu.Item>
            <Menu.Item key="help">Help</Menu.Item>
            <Menu.Item onClick={() => authService.logout()} key="logout">
              Log out
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout>
          <Title className="title" style={{ color: '#0267C1' }} level={1}>
            STORY SQUAD
          </Title>
          {/* <Content className="content"> */}
          <div className="homescreen-content">
            <button>
              <h2>
                <Link to="/add-child">
                  <PlusCircleFilled /> Add a Child
                </Link>
              </h2>
            </button>
          </div>
          {/* </Content> */}
        </Layout>
      </Layout>
    </>
  );
};

export default HomeScreen;
