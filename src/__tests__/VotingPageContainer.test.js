import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { ChildLoadingComponent } from '../components/common';
import { VotingPage } from '../components/pages/VotingPage';

const mockStore = configureMockStore([]);
const store = mockStore({
  faceoffs: [{ SquadID: 0 }],
  child: {},
});

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

describe('<VotingPageContainer /> test suite', () => {
  test('container renders without crashing', async () => {
    const { getByText } = render(
      <Router>
        <Provider store={store}>
          <VotingPage LoadingComponent={ChildLoadingComponent} />
        </Provider>
      </Router>
    );

    expect(getByText(/loading/i)).toBeInTheDocument();
  });
});
