import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { ChildLoadingComponent } from '../components/common';
import { DrawingSub } from '../components/pages/DrawingSub';

const mockStore = configureStore([]);
const store = mockStore();

afterEach(cleanup);

jest.mock('@auth0/auth0-react', () => ({
  Auth0Provider: ({ children }) => children,
  withAuthenticationRequired: (component, _) => component,
  useAuth0: () => {
    return {
      user: jest.fn(),
      isAuthenticated: true,
    };
  },
}));

describe('<DrawingSub /> test suite', () => {
  test('container renders without crashing', async () => {
    const { getByText } = render(
      <Router>
        <Provider store={store}>
          <DrawingSub LoadingComponent={ChildLoadingComponent} />
        </Provider>
      </Router>
    );
    expect(getByText(/loading/i)).toBeInTheDocument();
  });
});
