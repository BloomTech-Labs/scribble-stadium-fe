import React from 'react';
import { render, cleanup } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { ParentLoadingComponent } from '../components/common';
import NewParentDashboardContainer from '../components/pages/NewParentDashboard/NewParentDashboardContainer';

const mockStore = configureStore([]);
const store = mockStore();

afterEach(cleanup);
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

describe('<NewParentDashboardContainer /> test suite', () => {
  test('container renders without crashing', async () => {
    const { container } = render(
      <Provider store={store}>
        <NewParentDashboardContainer
          LoadingComponent={ParentLoadingComponent}
        />
      </Provider>,
      { wrapper: MemoryRouter }
    );
    expect(container).toBeInTheDocument();
  });
});
