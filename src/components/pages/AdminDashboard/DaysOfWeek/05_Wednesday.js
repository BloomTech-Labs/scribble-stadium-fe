import React from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Button } from 'antd';

const { Header, Footer, Content } = Layout;

const Wednesday = props => {
  const { push } = useHistory();

  const adminDash = () => {
    push('/admin');
  };
  return (
    <Layout className="moderation-page">
      <Header className="ant-page-header">
        <h1>Story Squad</h1>
      </Header>
      <h2>Wednesday</h2>
      <h3>Fifth Day of Game Play</h3>
      <h4>Point Share Stage</h4>
      <Content>
        <p>
          Ex: There are two side quests and two pictures. Kid user 1 allocates
          his or her points in the following way: - 20 points to kid user 1's
          image - 30 points to kid user 1's side quest - 40 points to kid user
          2's side quest - 10 points to kid user 2's image Kid user 1 divided
          his or her points based on how likely kid user 1 thought that specific
          side quest or image would match up against another users image or side
          quest.
        </p>
        <p>
          Kid user 2 allocates his or her points following the same thought
          process.
        </p>
        <p>Each submission must get a minimum of 10 points.</p>
        <p>
          If a student fails to allocate points, each submission defaults to 25
          points per side quest and drawing.
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

export default Wednesday;
