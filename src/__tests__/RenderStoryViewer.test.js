import React from 'react';
import RenderStoryViewer from '../components/pages/StoryPrompt/RenderStoryViewer';
import ReactDOM from 'react-dom';

jest.mock('@okta/okta-react', () => ({
  useOktaAuth: () => {
    return {
      authState: {},
      authService: {},
    };
  },
}));
describe('<RenderStoryViewer /> test suite', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RenderStoryViewer />, div);
  });
});
