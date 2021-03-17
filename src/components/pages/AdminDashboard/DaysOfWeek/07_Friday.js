import React from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Button } from 'antd';

const { Header, Footer, Content } = Layout;

const Friday = props => {
  const { push } = useHistory();

  const adminDash = () => {
    push('/admin');
  };

  return (
    <Layout className="moderation-page">
      <Header className="ant-page-header">
        <h1>Story Squad</h1>
      </Header>
      <div>
        <h2>Friday</h2>
        <h3>Seventh and Last Day of Game Play</h3>
        <h4>Scoreboard Stage</h4>
      </div>
      <Content>
        <p>Today at 3 PM is the big reveal and the winners are announced.</p>
      </Content>
      <Button style={{ width: '45%' }}>Simulate Game Play</Button>
      <Button style={{ width: '45%' }} onClick={adminDash}>
        Admin Dash
      </Button>
      <Footer></Footer>
    </Layout>
  );
};

export default Friday;
