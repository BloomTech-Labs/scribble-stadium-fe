import React from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Button } from 'antd';
import { connect } from 'react-redux';
import { devMode } from '../../../../state/actions/index';

const { Content } = Layout;

const DayComponent = ({ day, devMode, setDevMode }) => {
  const { push } = useHistory();

  const handleSim = () => {
    push(`${day.gameStageUrl}`);
  };

  const handleDevMode = () => {
    setDevMode(!devMode.isDevModeActive);
  };

  return (
    <div className="dev-tools-day">
      <h2>{day.dayName}</h2>
      <h3>{day.dayNumber}</h3>
      <h4>{day.stage}</h4>
      <Content>
        <p>{day.content}</p>
        <button onClick={handleDevMode}>
          {devMode.isDevModeActive ? 'Deactivate' : 'Activate'} developer mode
        </button>
      </Content>
      <Button onClick={handleSim} disabled={day.gameStageUrl == null}>
        Simulate Game Play
      </Button>
    </div>
  );
};

export default connect(
  state => ({
    devMode: state.devMode,
  }),
  { setDevMode: devMode.setDevMode }
)(DayComponent);
