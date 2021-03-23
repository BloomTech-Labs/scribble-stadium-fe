import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Button, Radio } from 'antd';

const { Content } = Layout;

const DayComponent = ({ day }) => {
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

export default DayComponent;
