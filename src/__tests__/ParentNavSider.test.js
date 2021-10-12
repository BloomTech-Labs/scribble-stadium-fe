import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { render, screen, cleanup } from '@testing-library/react';
import ParentNavSider from '../components/common/ParentNavSider';

afterEach(() => {
  cleanup();
});

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
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<Component />, div);
  });

  test('Dashboard Nav', () => {
    render(<Component />);
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
  });

  test('Welcome Back', () => {
    render(<Component />);
    expect(screen.getByText(/Welcome Back/i)).toBeInTheDocument();
  });

  test('Help Nav', () => {
    render(<Component />);
    expect(screen.getByText(/Help/i)).toBeInTheDocument();
  });
  test('Log out Nav', () => {
    render(<Component />);
    expect(screen.getByText(/log out/i)).toBeInTheDocument();
  });
});
