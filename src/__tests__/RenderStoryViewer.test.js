import React from 'react';
import RenderStoryViewer from '../components/pages/StoryPrompt/RenderStoryViewer';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
const mockStore = configureStore([]);
const store = mockStore();

jest.mock('@okta/okta-react', () => ({
  useOktaAuth: () => {
    return {
      authState: {},
      authService: {},
    };
  },
}));

const Component = () => {
  return (
    <Provider store={store}>
      <RenderStoryViewer />
    </Provider>
  );
};

describe('<RenderStoryViewer /> test suite', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Component />, div);
  });
});
