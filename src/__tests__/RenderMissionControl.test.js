import React from 'react';
import RenderMissionControl from '../components/pages/MissionControl/RenderMissionControl';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<RenderMissionControl /> test suite', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <RenderMissionControl />
      </Router>,
      div
    );
  });
});
