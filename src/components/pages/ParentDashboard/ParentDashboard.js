import React from 'react';
import { Layout, Menu, Typography, Card } from 'antd';
import { Link } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

import { PlusCircleFilled } from '@ant-design/icons';
import ChildCard from '../../common/ChildCard';

const { Sider } = Layout;
const { Title } = Typography;

const initialChildren = [
  {
    Name: 'Jackie',
    GradeLevelID: '7',
    PIN: '1234',
    AvatarURL: 'https://picsum.photos/200/300.jpg',
    IsDyslexic: false,
  },
  {
    Name: 'Ryan',
    GradeLevelID: '8',
    PIN: '1212',
    AvatarURL: 'https://picsum.photos/200/300.jpg',
    IsDyslexic: false,
  },
];

const ParentDashboard = props => {
  const { authService } = useOktaAuth();

  const { parent } = props;

  return (
    <>
      <Layout className="parent-dashboard">
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
            <Menu.Item key="settings">
              <Link to="/parent/settings">Parent Settings</Link>
            </Menu.Item>
            <Menu.Item key="help">
              <Link to="/parent/help">Help</Link>
            </Menu.Item>
            <Menu.Item onClick={() => authService.logout()} key="logout">
              Log out
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout>
          <Title className="title" style={{ color: '#0267C1' }} level={1}>
            STORY SQUAD
          </Title>
          <div className="children-container">
            <Layout className="children" style={{ flexFlow: 'row wrap' }}>
              {initialChildren.map(child => (
                <ChildCard name={child.Name} AvatarURL={child.AvatarURL} />
              ))}
              <Card>
                <h2>
                  <Link to="/parent/add-child">
                    <PlusCircleFilled /> Add a Child
                  </Link>
                </h2>
              </Card>
            </Layout>
          </div>
        </Layout>
      </Layout>
    </>
  );
};

export default ParentDashboard;
