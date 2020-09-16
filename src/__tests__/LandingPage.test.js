import { LandingPage } from '../components/pages/LandingPage';
import React from 'react';
import ReactDOM from 'react-dom';

describe('<LandingPage /> test suite', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LandingPage />, div);
  });
});
