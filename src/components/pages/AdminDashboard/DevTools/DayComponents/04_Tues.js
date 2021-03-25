import React from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Button, Radio } from 'antd';

const { Header, Content, Footer } = Layout;

const Tues = () => {
  const { push } = useHistory();

  const adminDash = () => {
    push('/admin');
  };

  const gameStageUrl = null;

  const handleSim = () => {
    push(`${gameStageUrl}`);
  };

  return (
    <Layout>
      <Header className="ant-page-header">
        <h1>Story Squad</h1>
        <Button onClick={adminDash}>Back to Admin Dashboard</Button>
      </Header>
      <div className="dev-tools-day">
        <h2>Tuesday</h2>
        <h3>Game Play Day: 4</h3>
        <h4>The Join a Squad Stage</h4>
        <Content>
          <p>
            2 kid users are put together to form a "Squad". A kid user does not
            do much interaction with the app at this stage. DS is doing most of
            the work behind the scenes in order to match kid users with other
            kid users at similar skill levels. Side quests are analyzed by DS.
            Side quests and drawings will receive a "squad score" by DS and be
            grouped with a student of similar skill set into a squad. Each squad
            will be matched with a similarly skilled squad to compete against in
            a matchup. The matchup refers to the overall squad-vs.-squad
            face-offs taking place, and will be displayed on the matchup page as
            4 face-offs.
          </p>
          <div className="state-buttons">
            <Button
              className="simulate-button"
              onClick={handleSim}
              disabled={gameStageUrl == null}
            >
              Simulate Game Play
            </Button>
          </div>
        </Content>
      </div>
      <Footer></Footer>
    </Layout>
  );
};

export default Tues;
