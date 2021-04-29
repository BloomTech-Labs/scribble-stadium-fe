import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
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
  test('Dashboard Nav', () => {
    render(<Component parent={{ children: [] }} />);

    const hamburgerBtn = screen.getByRole('button', { class: 'ant-btn' });
    fireEvent(
      hamburgerBtn,
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );

    // The nav will display 'Dashboard' at least twice, so expect to see that amount of elements or more.
    expect(screen.getAllByText(/Dashboard/i).length >= 2).toBeTruthy();
  });

  test('Help Nav', () => {
    render(<Component parent={{ children: [] }} />);

    const hamburgerBtn = screen.getByRole('button', { class: 'ant-btn' });
    fireEvent(
      hamburgerBtn,
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );

    expect(screen.getByText(/Help/i)).toBeInTheDocument();
  });
  test('Parent Settings Nav', () => {
    render(<Component parent={{ children: [] }} />);

    const hamburgerBtn = screen.getByRole('button', { class: 'ant-btn' });
    fireEvent(
      hamburgerBtn,
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );

    expect(screen.getByText(/Parent Settings/i)).toBeInTheDocument();
  });
  test('Change user Nav', () => {
    render(<Component parent={{ children: [] }} />);

    const hamburgerBtn = screen.getByRole('button', { class: 'ant-btn' });
    fireEvent(
      hamburgerBtn,
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );

    expect(screen.getByText(/Change User/i)).toBeInTheDocument();
  });
  test('Log out Nav', () => {
    render(<Component parent={{ children: [] }} />);

    const hamburgerBtn = screen.getByRole('button', { class: 'ant-btn' });
    fireEvent(
      hamburgerBtn,
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );

    expect(screen.getByText(/log out/i)).toBeInTheDocument();
  });
});
