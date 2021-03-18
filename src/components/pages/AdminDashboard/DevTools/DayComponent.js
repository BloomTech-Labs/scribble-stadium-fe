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
    <div className="dev-tools-day">
      <h2>{day.dayName}</h2>
      <h3>{day.dayNumber}</h3>
      <h4>{day.stage}</h4>
      <Content>
        <p>
          <b>Stage Description:</b> {day.content}
        </p>
      </Content>
      <Button
        style={{ width: '20%' }}
        onClick={handleSim}
        disabled={day.gameStageUrl == null}
      >
        Simulate Game Play
      </Button>
    </div>
  );
};

export default DayComponent;
