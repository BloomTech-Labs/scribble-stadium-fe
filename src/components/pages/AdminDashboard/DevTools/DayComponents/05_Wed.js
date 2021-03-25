import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Layout, Button, Radio } from 'antd';

import { date } from '../../../../../state/actions/index';

const { Header, Content, Footer } = Layout;

const Wed = ({ setDate }) => {
  const { push } = useHistory();

  const adminDash = () => {
    push('/admin');
  };

  const gameStageUrl = '/child/join';

  const findDayOfWeekReference = 3;

  const handleSim = () => {
    push(`${gameStageUrl}`);
  };

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
        <h2>Wednesday</h2>
        <h3>Game Play Day: 5</h3>
        <h4>The Point Share Stage</h4>
        <Content>
          <p>
            Ex: There are two side quests and two pictures. Kid user 1 allocates
            his or her points in the following way: - 20 points to kid user 1's
            image - 30 points to kid user 1's side quest - 40 points to kid user
            2's side quest - 10 points to kid user 2's image Kid user 1 divided
            his or her points based on how likely kid user 1 thought that
            specific side quest or image would match up against another users
            image or side quest. Kid user 2 allocates his or her points
            following the same thought process. Each submission must get a
            minimum of 10 points. If a student fails to allocate points, each
            submission defaults to 25 points per side quest and drawing.
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
)(Wed);
