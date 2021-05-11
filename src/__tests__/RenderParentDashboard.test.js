import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import RenderParentDashboard from '../components/pages/ParentDashboard/RenderParentDashboard';

import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
const mockStore = configureStore([]);
const store = mockStore({ parent: { name: 'Dillan Harris' } });

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
  test('Welcome back Nav', () => {
    render(<Component parent={{ children: [] }} />);

    expect(screen.getByText(/Welcome back/i)).toBeInTheDocument();
  });

  test.skip('Change user Nav', () => {
    render(<Component parent={{ children: [] }} />);

    fireEvent(
      screen.getByTestId('parent-avatar'),
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );

    expect(screen.getByText(/Change User/i)).toBeInTheDocument();
  });

  test.skip('Logout Nav', () => {
    render(<Component parent={{ children: [] }} />);

    fireEvent(
      screen.getByTestId('parent-avatar'),
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );

    expect(screen.getByText(/Logout/i)).toBeInTheDocument();
  });
});
