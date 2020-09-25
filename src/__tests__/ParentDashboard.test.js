import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, cleanup } from '@testing-library/react';
import ParentDashboard from '../components/pages/ParentDashboard/ParentDashboard';

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

const Component = () => {
  return (
    <Router>
      <Provider store={store}>
        <ParentDashboard />
      </Provider>
    </Router>
  );
};

describe('<ParentDashboard /> test suite', () => {
  test('Welcome Back', () => {
    render(<Component />);
    expect(screen.getByText(/Welcome Back/i)).toBeInTheDocument();
  });

  test('Dashboard Nav', () => {
    render(<Component />);
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
  });

  test('Help Nav', () => {
    render(<Component />);
    expect(screen.getByText(/Help/i)).toBeInTheDocument();
  });
  test('Parent Settings Nav', () => {
    render(<Component />);
    expect(screen.getByText(/Parent Settings/i)).toBeInTheDocument();
  });
  test('Log out Nav', () => {
    render(<Component />);
    expect(screen.getByText(/log out/i)).toBeInTheDocument();
  });
});
