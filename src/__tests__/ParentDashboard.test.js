import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { render, screen, cleanup, act } from '@testing-library/react';
import ParentDashboard from '../components/pages/ParentDashboard/ParentDashboard';
import { useOktaAuth } from '@okta/okta-react';

afterEach(() => {
  cleanup();
});
jest.mock('@okta/okta-react', () => ({
  useOktaAuth: () => {
    return {
      authState: {
        isAuthenticated: true,
      },
      authService: {},
    };
  },
}));

describe('<ParentDashboard /> test suite', () => {
  test('Welcome Back', () => {
    render(
      <Router>
        <ParentDashboard />
      </Router>
    );
    expect(screen.getByText(/Welcome Back/i)).toBeInTheDocument();
  });

  test('Dashboard Nav', () => {
    render(
      <Router>
        <ParentDashboard />
      </Router>
    );
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
  });

  test('Help Nav', () => {
    render(
      <Router>
        <ParentDashboard />
      </Router>
    );
    expect(screen.getByText(/Help/i)).toBeInTheDocument();
  });
  test('Parent Settings Nav', () => {
    render(
      <Router>
        <ParentDashboard />
      </Router>
    );
    expect(screen.getByText(/Parent Settings/i)).toBeInTheDocument();
  });
  test('Log out Nav', () => {
    render(
      <Router>
        <ParentDashboard />
      </Router>
    );
    expect(screen.getByText(/log out/i)).toBeInTheDocument();
  });
});
