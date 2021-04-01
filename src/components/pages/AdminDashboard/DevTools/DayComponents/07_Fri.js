import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Layout, Button, Radio } from 'antd';

import { date } from '../../../../../state/actions';
import SetTime from '../../SetTime';

const { Header, Content, Footer } = Layout;

const Fri = ({ setDate }) => {
  const { push } = useHistory();

  const adminDash = () => {
    push('/admin');
  };

  const gameStageUrl = '/child/match-up';

  const handleSim = () => {
    push(`${gameStageUrl}`);
  };

  const findDayOfWeekReference = 5;

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
        <h2>Friday</h2>
        <h3>Game Play Day: 7</h3>
        <h4>The Scoreboard Stage</h4>
        <Content>
          <p>Today at 3 PM is the big reveal and the winners are announced.</p>
          <p>Select the game state you would like to see in play:</p>
          <div className="state-buttons">
            <Radio.Group>
              <Radio className="radio-buttons"></Radio>
            </Radio.Group>
            <SetTime />
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

// connect votes and time of day state
export default connect(
  state => ({
    date: state.date,
  }),
  {
    setDate: date.setDate,
  }
)(Fri);
