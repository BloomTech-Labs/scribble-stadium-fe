import React from 'react';
import { Layout, Menu, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

const { Sider } = Layout;
const { Title } = Typography;

const ParentDashboard = props => {
  const { authService } = useOktaAuth();
  return (
    <>
      <Layout className="container">
        <Sider className="sider" theme="light">
          <div className="logo">
            <Title className="welcome" level={4}>
              Welcome Back
            </Title>
          </div>
          <Menu className="menu" mode="inline" defaultSelectedKeys={['help']}>
            <Menu.Item key="dashboard">
              <Link to="/parent/dashboard">Dashboard</Link>
            </Menu.Item>
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
          <div className="Contact">
            <Title
              className="help-title"
              style={{ color: '#0267C1' }}
              level={1}
            >
              Help
            </Title>
            <h1>Contact US</h1>
            <h3>Email us: email@storysquad.com</h3>
          </div>
        </Layout>
      </Layout>
    </>
  );
};

export default ParentDashboard;

// import React from 'react';
// import '../../../styles/HelpPage.less';
// import { Typography } from 'antd';
// const { Title } = Typography;

// const Help = () => {
//   return (
//     <>
//       <div className="Contact">
//         <Title className="help-title" style={{ color: '#0267C1' }} level={1}>
//           HELP
//         </Title>
//         <h1>Contact US</h1>
//         <h3>Email us: email@storysquad.com</h3>
//       </div>
//     </>
//   );
// };

// export default Help;
