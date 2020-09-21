import React from 'react';
import StoryViewer from '../components/pages/StoryPrompt/StoryViewer';
import ReactDOM from 'react-dom';

describe('<StoryViewer /> test suite', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StoryViewer />, div);
  });
});
