import React from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Button } from 'antd';

const { Header, Footer, Content } = Layout;

const Tuesday = props => {
  const { push } = useHistory();

  const adminDash = () => {
    push('/admin');
  };

  return (
    <Layout className="moderation-page">
      <Header className="ant-page-header">
        <h1>Story Squad</h1>
      </Header>
      <h2>Tuesday</h2>
      <h3>Fourth Day of Game Play</h3>
      <h4>Join a Squad Stage</h4>
      <Content>
        <p>2 kid users are put together to form a "Squad".</p>
        <p>
          A kid user does not do much interaction with the app at this stage. DS
          is doing most of the work behind the scenes in order to match kid
          users with other kid users at similar skill levels.
        </p>
        <p>
          Side quests are analyzed by DS. Side quests and drawings will receive
          a "squad score" by DS and be grouped with a student of similar
          skillset into a squad. Each squad will be matched with a similarly
          skilled squad to compete against in a matchup. The matchup refers to
          the overall squad-vs.-squad face-offs taking place, and will be
          displayed on the matchup page as 4 face-offs.
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

export default Tuesday;
