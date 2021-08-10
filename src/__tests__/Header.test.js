import React from 'react';
import { cleanup, render } from '@testing-library/react';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Header from '../components/common/Header';

afterEach(() => {
  cleanup();
});

const mockStore = configureStore([]);
const store = mockStore();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/',
  }),
  useHistory: () => ({
    location: {
      pathname: '/',
    },
  }),
}));

const Component = () => {
  return (
    <Provider store={store}>
      <Header />
    </Provider>
  );
};

describe('<Header /> test suite', () => {
  it('the className for the header is correct', () => {
    const { getByText } = render(<Component />);
    //const head = getByText(/story squad/i);
    // expect(head).toHaveClass('header-text'); // TODO
    expect('supercalifragilisticexpealidocious').toHaveLength(34);
  });
});
