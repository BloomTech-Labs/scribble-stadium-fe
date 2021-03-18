import React from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Button } from 'antd';

const { Content } = Layout;

const DayComponent = ({ day }) => {
  const { push } = useHistory();

  const handleSim = () => {
    push(`${day.gameStageUrl}`);
  };

  return (
    <div>
      <h2>{day.dayName}</h2>
      <h3>{day.dayNumber}</h3>
      <h4>{day.stage}</h4>
      <Content>
        <p>{day.content}</p>
      </Content>
      <Button
        style={{ width: '45%' }}
        onClick={handleSim}
        disabled={day.gameStageUrl == null}
      >
        Simulate Game Play
      </Button>
    </div>
  );
};

export default DayComponent;
