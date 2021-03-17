import React from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Button } from 'antd';

const { Header, Footer, Content } = Layout;

const Sunday = props => {
  const { push } = useHistory();

  const adminDash = () => {
    push('/admin');
  };
  return (
    <Layout className="moderation-page">
      <Header className="ant-page-header">
        <h1>Story Squad</h1>
      </Header>
      <h2>Sunday</h2>
      <h3>Second Day of Game Play</h3>
      <h4>The Drawing Stage</h4>
      <Content>
        <p>
          Kid users are instructed to draw a picture of one sentece from the
          exercpt of the story of the week. <br />
          When the kid user uploads the image, they proceed to the next stage in
          the game.
        </p>
      </Content>
      <Button style={{ width: '45%' }}>Simulate Game Play</Button>
      <Button style={{ width: '45%' }} onClick={adminDash}>
        Admin Dash
      </Button>
      <Footer></Footer>
    </Layout>
  );
};

export default Sunday;
