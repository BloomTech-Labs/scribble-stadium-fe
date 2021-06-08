import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//test for LoginContainer
import LoginContainer from '../components/pages/Login/LoginContainer';
import configureStore from 'redux-mock-store';
const mockStore = configureStore([]);
const store = mockStore();

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

const Component = () => {
  return (
    <Provider store={store}>
      <LoginContainer />
    </Provider>
  );
};

describe('<LoginContainer /> test suite', () => {
  test('signin widget mounts successfully', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Component />, div);
  });
});
