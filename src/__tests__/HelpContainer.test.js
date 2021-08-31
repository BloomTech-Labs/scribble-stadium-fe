import React from 'react';
import { render, cleanup } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { ParentLoadingComponent } from '../components/common';
import HelpContainer from '../components/pages/Help/HelpContainer';

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

describe('<HelpContainer /> test suite', () => {
  test('container renders without crashing', async () => {
    const { container, getByText } = render(
      <Provider store={store}>
        <HelpContainer LoadingComponent={ParentLoadingComponent} />
      </Provider>,
      { wrapper: MemoryRouter }
    );
    expect(container).toBeInTheDocument();
    expect(getByText(/loading/i)).toBeInTheDocument();
  });
});
