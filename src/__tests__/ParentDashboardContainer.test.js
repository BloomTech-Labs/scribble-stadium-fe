import React from 'react';
import { render, cleanup, act } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { ParentLoadingComponent } from '../components/common';
import ParentDashboardContainer from '../components/pages/ParentDashboard/ParentDashboardContainer';

const mockStore = configureStore([]);
const store = mockStore();

afterEach(cleanup);

jest.mock('@okta/okta-react', () => ({
  useOktaAuth: () => {
    return {
      authState: {
        isAuthenticated: true,
      },
      authService: {
        getUser: () => Promise.reject(),
      },
    };
  },
}));

// works but has warnings for state and un-mounted components - 100%
describe('<ParentDashboardContainer /> test suite', () => {
  test('container renders without crashing', async () => {
    const { container, getByText } = render(
      <Provider store={store}>
        <ParentDashboardContainer LoadingComponent={ParentLoadingComponent} />
      </Provider>,
      { wrapper: MemoryRouter }
    );
    expect(container).toBeInTheDocument();
    expect(getByText(/loading/i)).toBeInTheDocument();
  });
});
