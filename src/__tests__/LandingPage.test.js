import { LandingPage } from '../components/pages/LandingPage';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
const mockStore = configureStore([]);
const store = mockStore();

const Component = () => {
  return (
    <Provider store={store}>
      <LandingPage />
    </Provider>
  );
};

describe('<LandingPage /> test suite', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Component />, div);
  });
});
