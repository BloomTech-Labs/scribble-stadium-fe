import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Help from '../components/common/Help';

test('Heading', () => {
  render(
    <Router>
      <Help />
    </Router>
  );
  expect(screen.getByText(/Contact US/i)).toBeInTheDocument();
});

test('Heading', () => {
  render(
    <Router>
      <Help />
    </Router>
  );
  expect(
    screen.getByText(/Email us: email@storysquad.com/i)
  ).toBeInTheDocument();
});
