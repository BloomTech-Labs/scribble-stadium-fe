import React from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Button } from 'antd';

const { Header, Footer, Content } = Layout;

const Thursday = props => {
  const { push } = useHistory();

  const adminDash = () => {
    push('/admin');
  };
  return (
    <Layout className="moderation-page">
      <Header className="ant-page-header">
        <h1>Story Squad</h1>
      </Header>
      <h2>Thursday</h2>
      <h3>Sixth Day of Game Play</h3>
      <h4>Matchup and Independent Voting Stage</h4>
      <Content>
        <p>
          The Matchup Dashboard shows the face-offs from the previous round. The
          side quest with the greatest amount of points from Team A and the side
          quest with the greatest amount of points from Team B are put up
          against each other. The drawing with the greatest points from Team A
          and the drawing with the greatest points from Team B are put up
          against each other. The total points in this round will be equal to
          400. A squad needs 200.5 points or more to win the Matchup.
        </p>

        <p>
          In this stage there are 100 points allocated in each of the kid users.
          The kid users give an alloted amount of points of their choice to both
          side quests and images.The drawing and the side quest with the greater
          amount of points moves on the the next stage in the game.
        </p>

        <p>
          Each user in the cochort gets served up 3 independent voting sessions
          on A vs B side quests or pictures from other matches within their
          cohort. Each A vs B pair gets served up 3x randomly to voters on the
          platform. These voters vote for the better of the side quest or
          drawing and leave emoji feedback that is routed back to each author
          and populated on the Matchup page.
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

export default Thursday;
