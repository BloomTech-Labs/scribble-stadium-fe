import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { ChildLoadingComponent } from '../components/common';
import { WritingSub } from '../components/pages/WritingSub';

const mockStore = configureStore([]);
const store = mockStore();

afterEach(cleanup);

jest.mock('@auth0/auth0-react', () => ({
  useAuth0: () => {
    return {
      user: jest.fn(),
      isAuthenticated: true,
    };
  },
}));

describe('<WritingSub /> test suite', () => {
  test('container renders without crashing', async () => {
    const { getByText } = render(
      <Router>
        <Provider store={store}>
          <WritingSub LoadingComponent={ChildLoadingComponent} />
        </Provider>
      </Router>
    );
    expect(getByText(/loading/i)).toBeInTheDocument();
  });
});
