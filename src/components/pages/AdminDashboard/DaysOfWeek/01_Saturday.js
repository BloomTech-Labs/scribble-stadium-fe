import React from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Button } from 'antd';

const { Header, Footer, Content } = Layout;

const Saturday = props => {
  const { push } = useHistory();

  const adminDash = () => {
    push('/admin');
  };

  return (
    <Layout className="moderation-page">
      <Header className="ant-page-header">
        <h1>Story Squad</h1>
      </Header>
      <h2>Saturday</h2>
      <h3>First Day of Game Play</h3>
      <h4>The Reading Stage</h4>
      <Content>
        <p>At 11AM every Saturday, the game is reset.</p>
        <p>A kid user reads the excerpt from the story for the week. </p>
        <p>
          Only when the kid user is finished reading the story for the week,
          they are able to proceed to the next stage of the game.
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

export default Saturday;
