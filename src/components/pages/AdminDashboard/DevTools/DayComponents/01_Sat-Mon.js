import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import { Layout, Button, Radio } from 'antd';

import useTasksRadio from './useTasksRadio';
import { setAllTasks, getChildTasks } from '../../../../../api/index';
import { date } from '../../../../../state/actions/index';

const { Header, Content, Footer } = Layout;

const SatMon = ({ setDate, child, devMode }) => {
  const [radioTasks, value, setValue] = useTasksRadio(0);
  const { user } = useAuth0();
  const { push } = useHistory();

  const adminDash = () => {
    push('/admin');
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
    setDate(findNextDayOfWeek(1));
  }, [1]);

  useEffect(() => {
    if (devMode.isDevModeActive === false) {
      push('/admin');
    }
  });

  const handleGetChildTasks = async e => {
    try {
      const res = await getChildTasks(user, child.id, child.cohortId);
      setAllTasks(
        user,
        res.ID,
        radioTasks.hasRead,
        radioTasks.hasDrawn,
        radioTasks.hasWritten
      );
      push('/child/mission-control');
    } catch (err) {
      console.log(err.message);
    }
  };

  const onChange = e => {
    setValue(e.target.value);
  };

  return (
    <Layout>
      <Header className="ant-page-header">
        <h1>Story Squad</h1>
        <Button onClick={adminDash}>Back to Admin Dashboard</Button>
      </Header>
      <div className="dev-tools-day">
        <h2>Saturday / Sunday / Monday</h2>
        <h3>Game Play Days: 1, 2, and 3</h3>
        <h4>The Reading, Writing, and Drawing Stages</h4>
        <Content>
          <p>
            <b>Saturday:</b> At 11AM every Saturday, the game is reset. A kid
            user reads the excerpt from the story for the week. Only when the
            kid user is finished reading the story for the week they are able to
            proceed to the next stage of the game.
          </p>
          <p>
            <b>Sunday:</b> Kid users are instructed to draw a picture of one
            sentence from the excerpt of the story of the week. When the kid
            user uploads the image, they proceed to the next stage in the game.
          </p>
          <p>
            <b>Monday:</b> Kid users are instructed to write a side quest
            (story) based off of the prompt given in the app. When the kid user
            uploads the image, they proceed to the next stage in the game.
            Monday at 11:59PM is the deadline for submissions. The image of the
            uploaded side quest is translated by a 3rd Party API implemented by
            DS.
          </p>
          <p>Select the game state you would like to see in play:</p>
          <div className="state-buttons">
            <Radio.Group
              onChange={onChange}
              value={value}
              className="radio-buttons"
            >
              <Radio value={0}>has completed 0 tasks</Radio>
              <Radio value={1}>hasRead</Radio>
              <Radio value={2}>hasRead and hasDrawn</Radio>
              <Radio value={3}>hasRead, hasDrawn, and hasWritten</Radio>
            </Radio.Group>
            <Button className="simulate-button" onClick={handleGetChildTasks}>
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
    child: state.child,
    devMode: state.devMode,
  }),
  {
    setDate: date.setDate,
  }
)(SatMon);
