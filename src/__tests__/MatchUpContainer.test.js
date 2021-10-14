import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { ChildLoadingComponent } from '../components/common';
import MatchUp from '../components/pages/MatchUp/MatchUpContainer';

const mockStore = configureMockStore([]);
const store = mockStore({
  child: { id: 0 },
  squad: {},
});

afterEach(cleanup);

jest.mock('@auth0/auth0-react', () => ({
  useAuth0: () => {
    return {
      user: jest.fn(),
      isAuthenticated: true,
    };
  },
}));

describe('<MatchupContainer /> test suite', () => {
  test('container renders without crashing', async () => {
    const { getByText } = render(
      <Router>
        <Provider store={store}>
          <MatchUp LoadingComponent={ChildLoadingComponent} />
        </Provider>
      </Router>
    );

    expect(getByText(/loading/i)).toBeInTheDocument();
  });
});
