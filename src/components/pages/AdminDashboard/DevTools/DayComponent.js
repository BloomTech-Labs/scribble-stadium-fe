import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Button, Radio } from 'antd';
import { connect } from 'react-redux';
import { date } from '../../../../state/actions/index';

const { Content } = Layout;

const DayComponent = ({ day, setDate }) => {
  const [gameState, setGameState] = useState();
  const { push } = useHistory();

  const handleSim = () => {
    push(`${day.gameStageUrl}`);
  };

  // const onChange = e => {
  //   console.log('radio checked', e.target.value);
  //   setGameState({
  //     value: e.target.value,
  // });

  const radioStyle = {
    display: 'block',
    height: '50px',
    size: 'small',
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
    setDate(findNextDayOfWeek(day.findDayOfWeekReference));
  }, [day.findDayOfWeekReference]);

  return (
    <div className="dev-tools-day">
      <h2>{day.dayName}</h2>
      <h3>{day.dayNumber}</h3>
      <h4>{day.stage}</h4>
      <Content>
        <p>{day.content}</p>
        <p>Select the game state you would like to see in play:</p>
        {/* Add onChange handler in Radio.Group */}
        <Radio.Group value={gameState}>
          {day.state.map(choices => {
            return (
              <Radio style={radioStyle} value={setGameState}>
                {choices}
              </Radio>
            );
          })}
        </Radio.Group>
        <Button
          style={{ margin: '1rem' }}
          onClick={handleSim}
          disabled={day.gameStageUrl == null}
        >
          Simulate Game Play
        </Button>
      </Content>
    </div>
  );
};

export default connect(
  state => ({
    date: state.date,
  }),
  { setDate: date.setDate }
)(DayComponent);
