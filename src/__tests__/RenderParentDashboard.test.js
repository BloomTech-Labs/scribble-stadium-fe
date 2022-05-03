import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import RenderNewParentDashboard from '../components/pages/NewParentDashboard/RenderNewParentDashboard';

import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
const mockStore = configureStore([]);
const store = mockStore({ parent: { name: 'Dillan Harris' } });

afterEach(() => {
  cleanup();
});

jest.mock('@auth0/auth0-react', () => ({
  Auth0Provider: ({ children }) => children,
  withAuthenticationRequired: (component, _) => component,
  useAuth0: () => {
    return {
      isAuthenticated: false,
      userInfo: {
        sub: '1234567890',
        name: 'John Doe',
        email: 'johndoe@test.com',
      },
      getIdTokenClaims: jest.fn(),
    };
  },
}));

let mockStorage = {
  idToken: '...',
  isAuthenticated: true,
};

beforeAll(() => {
  global.Storage.prototype.setitem = jest.fn((key, value) => {
    mockStorage[key] = value;
  });
  global.Storage.prototype.getitem = jest.fn(key => mockStorage[key]);
});

beforeEach(() => {
  mockStorage = {};
});

const storageBackups = {
  setItem: global.Storage.prototype.setItem,
  getItem: global.Storage.prototype.getItem,
};

afterAll(() => {
  (global.Storage.prototype.getItem = storageBackups.getItem),
    (global.Storage.prototype.setItem = storageBackups.setItem);
});

const Component = props => {
  return (
    <Router>
      <Provider store={store}>
        <RenderNewParentDashboard {...props} />
      </Provider>
    </Router>
  );
};

describe('<NewParentDashboard /> test suite', () => {
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
