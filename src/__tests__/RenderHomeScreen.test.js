import React from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import HomeScreen from '../components/pages/HomeScreen/HomeScreen';

test('Heading', () => {
  render(
    <Router>
      <HomeScreen />
    </Router>
  );
  expect(screen.getByText(/Story Squad/i)).toBeInTheDocument();
});

test('Welcome Back', () => {
  render(
    <Router>
      <HomeScreen />
    </Router>
  );
  expect(screen.getByText(/Welcome Back/i)).toBeInTheDocument();
});

test('Dashboard Nav', () => {
  render(
    <Router>
      <HomeScreen />
    </Router>
  );
  expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
});

test('Parent Settings Nav', () => {
  render(
    <Router>
      <HomeScreen />
    </Router>
  );
  expect(screen.getByText(/Parent Settings/i)).toBeInTheDocument();
});
test('Help Nav', () => {
  render(
    <Router>
      <HomeScreen />
    </Router>
  );
  expect(screen.getByText(/Help/i)).toBeInTheDocument();
});
test('Log out Nav', () => {
  render(
    <Router>
      <HomeScreen />
    </Router>
  );
  expect(screen.getByText(/Log out/i)).toBeInTheDocument();
});
