import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Layout, Button, Radio } from 'antd';

import { date } from '../../../../../state/actions/index';
const { Header, Content, Footer } = Layout;

const Thurs = ({ setDate }) => {
  const { push } = useHistory();

  const adminDash = () => {
    push('/admin');
  };

  const gameStageUrl = '/child/match-up';

  const handleSim = () => {
    push(`${gameStageUrl}`);
  };

  const findDayOfWeekReference = 4;

  const findNextDayOfWeek = selectedDay => {
    let date = new Date();
    let resultDate = new Date(date.getTime());
    resultDate.setDate(
      //.setDate is a JS date function NOT the setDate() action used by Redux
      date.getDate() + ((7 + selectedDay - date.getDay()) % 7)
    );
    return resultDate;
  };

  useEffect(() => {
    setDate(findNextDayOfWeek(findDayOfWeekReference));
  }, [findDayOfWeekReference]);

  return (
    <Layout>
      <Header className="ant-page-header">
        <h1>Story Squad</h1>
        <Button onClick={adminDash}>Back to Admin Dashboard</Button>
      </Header>
      <div className="dev-tools-day">
        <h2>Thursday</h2>
        <h3>Game Play Day: 6</h3>
        <h4>The Matchup and Independent Voting Stage</h4>
        <Content>
          <p>
            The Matchup Dashboard shows the face-offs from the previous round.
            The side quest with the greatest amount of points from Team A and
            the side quest with the greatest amount of points from Team B are
            put up against each other. The drawing with the greatest points from
            Team A and the drawing with the greatest points from Team B are put
            up against each other. The total points in this round will be equal
            to 400. A squad needs 200.5 points or more to win the Matchup. In
            this stage there are 100 points allocated in each of the kid users.
            The kid users give an allotted amount of points of their choice to
            both side quests and images.The drawing and the side quest with the
            greater amount of points moves on to the next stage in the game.
            Each user in the cohort gets served up 3 independent voting sessions
            on A vs B side quests or pictures from other matches within their
            cohort. Each A vs B pair gets served up 3x randomly to voters on the
            platform. These voters vote for the better of the side quest or
            drawing and leave emoji feedback that is routed back to each author
            and populated on the Matchup page.
          </p>
          <p>Select the game state you would like to see in play:</p>
          <div className="state-buttons">
            <Radio.Group>
              <Radio className="radio-buttons"></Radio>
            </Radio.Group>
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

export default connect(
  state => ({
    date: state.date,
  }),
  {
    setDate: date.setDate,
  }
)(Thurs);
