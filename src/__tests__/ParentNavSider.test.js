import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { render, screen, cleanup } from '@testing-library/react';
import ParentNavSider from '../components/common/ParentNavSider';

jest.mock('@auth0/auth0-react', () => ({
  Auth0Provider: ({ children }) => children,
  withAuthenticationRequired: (component, _) => component,
  useAuth0: () => {
    return {
      isAuthenticated: true,
    };
  },
}));

const mockStore = configureStore([]);
const store = mockStore();

const Component = () => {
  return (
    <Router>
      <Provider store={store}>
        <ParentNavSider />
      </Provider>
    </Router>
  );
};

describe('<ParentNavSider /> test suite', () => {
  beforeEach(() => {
    render(<Component />);
  });

  afterEach(() => {
    cleanup();
  });

  test('renders without crashing', () => {
    const parentNavSider = screen.getByTestId(/parentnavsider/i);
    expect(parentNavSider).toBeInTheDocument();
  });

  test('Dashboard Nav', () => {
    const dashboardNav = screen.getByText(/dashboard/i);
    expect(dashboardNav).toBeInTheDocument();
  });

  test('Welcome Back', () => {
    const welcomeBack = screen.getByText(/welcome back/i);
    expect(welcomeBack).toBeInTheDocument();
  });

  test('Help Nav', () => {
    const helpNav = screen.getByText(/help/i);
    expect(helpNav).toBeInTheDocument();
  });
  test('Log out Nav', () => {
    const logOutNav = screen.getByText(/log out/i);
    expect(logOutNav).toBeInTheDocument();
  });
});
