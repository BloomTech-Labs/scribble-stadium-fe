import React from 'react';
import RenderMissionControl from '../components/pages/MissionControl/RenderMissionControl';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
const mockStore = configureStore([]);
const store = mockStore();

const Component = () => {
  return (
    <Router>
      <Provider store={store}>
        <RenderMissionControl />
      </Provider>
    </Router>
  );
};

describe('<RenderMissionControl /> test suite', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Component />, div);
  });
});
