import React, { Component } from 'react';
import { Layout, Menu, Button, Typography } from 'antd';

import '../../../styles/HomeScreen.less';
import SubscribeButton from '../../common/SubscribeButton';

const { Content, Sider } = Layout;
const { Title } = Typography;

class HomeScreen extends Component {
  render() {
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
              <Menu.Item key="dashboard">Dashboard</Menu.Item>
              <Menu.Item key="settings">Parent Settings</Menu.Item>
              <Menu.Item key="help">Help</Menu.Item>
              <Menu.Item key="logout">Log out</Menu.Item>
            </Menu>
          </Sider>

          <Layout>
            <Title className="title" style={{ color: '#0267C1' }} level={1}>
              STORY SQUAD
            </Title>
            <Content className="content">
              <button>
                <h2>Subscribe</h2>
              </button>
            </Content>
          </Layout>
        </Layout>
      </>
    );
  }
}

//   <Layout>
//     <Sider
//       className="container"
//       trigger={null}
//       collapsible
//       collapsed={this.state.collapsed}
//     >
//       <div className="logo">Welcome Back</div>
//       <Menu mode="inline" defaultSelectedKeys={['1']}>
//         <Menu.Item key="1">Dashboard</Menu.Item>
//         <Menu.Item key="2">Parent Settings</Menu.Item>
//         <Menu.Item key="3">Help</Menu.Item>
//         <Menu.Item key="4">Log out</Menu.Item>
//       </Menu>
//     </Sider>
//     <Layout className="site-layout">
//       <Header className="site-layout-background" style={{ padding: 0 }}>
//         {React.createElement(
//           this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
//           {
//             className: 'trigger',
//             onClick: this.toggle,
//           }
//         )}
//         <Title level={2}>STORY SQUAD</Title>
//       </Header>
//       <Content
//         className="site-layout-background2"
//         style={{
//           margin: '24px 16px',
//           padding: 24,
//           minHeight: 280,
//         }}
//       >
//         <SubscribeButton value="large" />
//       </Content>
//     </Layout>
//   </Layout>
// );
//   }
// }

export default HomeScreen;
