import React from 'react';
import {
  render,
  screen,
  waitForElementToBeRemoved,
  act,
  getByTestId,
} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { ProfileListPage } from '../components/pages/ProfileList';
jest.mock('../api', () => {
  return { getProfileData: () => Promise.resolve([]) };
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

describe('<ProfileListContainer />', () => {
  test('renders a loading state upon loading and calling for profiles', async () => {
    const promise = Promise.resolve();
    const { getByText } = render(
      <Router>
        <ProfileListPage />
      </Router>
    );
    const loadingMessage = getByText(/loading profiles.../i);
    expect(loadingMessage.innerHTML).toBe('Loading Profiles...');
    await act(() => promise);
  });
});
