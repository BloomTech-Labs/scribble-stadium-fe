import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup, waitFor } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

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
        getUser: () => Promise.resolve({ name: 'someone' }),
      },
    };
  },
}));

describe('<ParentDashboardContainer /> test suite', () => {
  test('container renders without crashing', async () => {
    const { getByText, findByText, queryByText } = render(
      <Router>
        <Provider store={store}>
          <ParentDashboardContainer LoadingComponent={ParentLoadingComponent} />
        </Provider>
      </Router>
    );
    let loader = getByText(/loading/i);
    expect(loader).toBeInTheDocument();

    await waitFor(async () => {
      await findByText(/welcome/i);
    });
    loader = queryByText(/loading/i);
    expect(loader).toBeNull();
  });
});
