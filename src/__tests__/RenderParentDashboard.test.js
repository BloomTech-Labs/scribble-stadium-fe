import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, cleanup } from '@testing-library/react';
import RenderParentDashboard from '../components/pages/ParentDashboard/RenderParentDashboard';

import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
const mockStore = configureStore([]);
const store = mockStore();

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

const Component = props => {
  return (
    <Router>
      <Provider store={store}>
        <RenderParentDashboard {...props} />
      </Provider>
    </Router>
  );
};

describe('<ParentDashboard /> test suite', () => {
  test('Welcome Back', () => {
    render(<Component parent={{ children: [] }} />);
    expect(screen.getByText(/Welcome Back/i)).toBeInTheDocument();
  });

  test('Dashboard Nav', () => {
    render(<Component parent={{ children: [] }} />);
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
  });

  test('Help Nav', () => {
    render(<Component parent={{ children: [] }} />);
    expect(screen.getByText(/Help/i)).toBeInTheDocument();
  });
  test('Parent Settings Nav', () => {
    render(<Component parent={{ children: [] }} />);
    expect(screen.getByText(/Parent Settings/i)).toBeInTheDocument();
  });
  test('Log out Nav', () => {
    render(<Component parent={{ children: [] }} />);
    expect(screen.getByText(/log out/i)).toBeInTheDocument();
  });
});
