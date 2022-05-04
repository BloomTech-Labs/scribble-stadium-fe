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
  idToken:
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik92ZDVXSFI0a0hNdzlqRTFKcmt0dCJ9.eyJuaWNrbmFtZSI6ImxsYW1hMDAxIiwibmFtZSI6ImxsYW1hMDAxQG1haWxkcm9wLmNjIiwicGljdHVyZSI6Imh0dHBzOi8vcy5ncmF2YXRhci5jb20vYXZhdGFyL2RjYTE0MDc1ZTFhNTA2MGJjNzQ4Y2RkZjc3Y2QyYzljP3M9NDgwJnI9cGcmZD1odHRwcyUzQSUyRiUyRmNkbi5hdXRoMC5jb20lMkZhdmF0YXJzJTJGbGwucG5nIiwidXBkYXRlZF9hdCI6IjIwMjItMDUtMDNUMjM6NDk6NTcuMjQ4WiIsImVtYWlsIjoibGxhbWEwMDFAbWFpbGRyb3AuY2MiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImlzcyI6Imh0dHBzOi8vZGV2LWh6MmtzMzU3LnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2MTQwMjVjOTRmZWM2ZDAwNjgyYmYyYTYiLCJhdWQiOiJtUTJISXBSeXFGOTdpdXo3VjBpUFJKM1YwWW80czgyeSIsImlhdCI6MTY1MTYyODE5NSwiZXhwIjoxNjU0MjIwMTk1LCJub25jZSI6IlJGY3RNRzlpTlZkaU1qQk9NR2hHUlVOblluNVhUVXBvY1V0bWQxZHdVazVqWVZsUkxsQXRVa2RJYnc9PSJ9.ZxSLzf0Wr6TSLzFlOrQHrm18rNTwX9LlFVvoQN52Ia8uP5bE0kN9ad064WxLodf20EhHW5Uq9TC7NX-JmLPT3vryop7--9TFAUHKQkFGAegBjjmzG5FgAKi2JgfGsWYhNAwADFH9ThrJ3W2van4QXsaQ5hKAAITyDc82f-8VsTELnrmOfydXdFQS7lWAeTBIn-k2u3rN7k061jtvj2NTWYu2L6yUjl7GOdl62SRWvLCHIjkBrYsCbiUOZgfD2aQyWS5rf3xRwmfZ0UKiEQMdLe4-8shEqYQ5tGB58OKhN1xzY3d5a1ch3iBr8yhoT1_h4c_8gIl3yt89fHrPo68QOQ',
  isAuthenticated: true,
};

beforeAll(() => {
  global.Storage.prototype.setitem = jest.fn((key, value) => {
    mockStorage[key] = value;
  });
  global.Storage.prototype.getitem = jest.fn(key => mockStorage[key]);
});

beforeEach(() => {
  mockStorage = {
    idToken:
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik92ZDVXSFI0a0hNdzlqRTFKcmt0dCJ9.eyJuaWNrbmFtZSI6ImxsYW1hMDAxIiwibmFtZSI6ImxsYW1hMDAxQG1haWxkcm9wLmNjIiwicGljdHVyZSI6Imh0dHBzOi8vcy5ncmF2YXRhci5jb20vYXZhdGFyL2RjYTE0MDc1ZTFhNTA2MGJjNzQ4Y2RkZjc3Y2QyYzljP3M9NDgwJnI9cGcmZD1odHRwcyUzQSUyRiUyRmNkbi5hdXRoMC5jb20lMkZhdmF0YXJzJTJGbGwucG5nIiwidXBkYXRlZF9hdCI6IjIwMjItMDUtMDNUMjM6NDk6NTcuMjQ4WiIsImVtYWlsIjoibGxhbWEwMDFAbWFpbGRyb3AuY2MiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImlzcyI6Imh0dHBzOi8vZGV2LWh6MmtzMzU3LnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2MTQwMjVjOTRmZWM2ZDAwNjgyYmYyYTYiLCJhdWQiOiJtUTJISXBSeXFGOTdpdXo3VjBpUFJKM1YwWW80czgyeSIsImlhdCI6MTY1MTYyODE5NSwiZXhwIjoxNjU0MjIwMTk1LCJub25jZSI6IlJGY3RNRzlpTlZkaU1qQk9NR2hHUlVOblluNVhUVXBvY1V0bWQxZHdVazVqWVZsUkxsQXRVa2RJYnc9PSJ9.ZxSLzf0Wr6TSLzFlOrQHrm18rNTwX9LlFVvoQN52Ia8uP5bE0kN9ad064WxLodf20EhHW5Uq9TC7NX-JmLPT3vryop7--9TFAUHKQkFGAegBjjmzG5FgAKi2JgfGsWYhNAwADFH9ThrJ3W2van4QXsaQ5hKAAITyDc82f-8VsTELnrmOfydXdFQS7lWAeTBIn-k2u3rN7k061jtvj2NTWYu2L6yUjl7GOdl62SRWvLCHIjkBrYsCbiUOZgfD2aQyWS5rf3xRwmfZ0UKiEQMdLe4-8shEqYQ5tGB58OKhN1xzY3d5a1ch3iBr8yhoT1_h4c_8gIl3yt89fHrPo68QOQ',
    isAuthenticated: true,
  };
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
