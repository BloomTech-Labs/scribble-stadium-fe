import React from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Button } from 'antd';

const { Header, Footer, Content } = Layout;

const Monday = props => {
  const { push } = useHistory();

  const adminDash = () => {
    push('/admin');
  };
  return (
    <Layout className="moderation-page">
      <Header className="ant-page-header">
        <h1>Story Squad</h1>
      </Header>
      <h2>Monday</h2>
      <h3>Third Day of Game Play</h3>
      <h4>The Writing Stage</h4>
      <Content>
        <p>
          Kid users are instructed to write a side quest (story) based off of
          the prompt given in the app. <br />
          When the kid user uploads the image, they proceed to the next stage in
          the game.
        </p>

        <p>Monday at 11:59PM is the deadline for submissions.</p>

        <p>
          The image of the uploaded side quest is translated by a 3rd Party API
          implemented by DS.
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

export default Monday;
