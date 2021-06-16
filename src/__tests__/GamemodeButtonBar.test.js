import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import ButtonBar from '../components/common/ButtonBar';

afterEach(() => {
  cleanup();
});

const mockStore = configureMockStore([]);
const store = mockStore({
  id: null,
  child_id: null,
  child: {
    id: null,
    name: null,
    isDyslexic: null,
    avatarUrl: null,
    gamemode: {
      mode: null,
      read: null,
      write: null,
      draw: null,
      sp: null,
    },
    gradeLevel: null,
    parentId: null,
    cohortId: null,
    memberId: null,
    VotesRemaining: null,
    totalPoints: null,
    wins: null,
    losses: null,
    achievements: null,
    Ballots: [],
    Streaks: '',
  },
  story_id: null,
  hasRead: false,
  hasWritten: false,
  hasDrawn: false,
  complexity: null,
  LowConfidence: null,
  story: {
    drawingPrompt: '',
    writingPrompt: '',
    storyTitle: '',
    storyUrl: null,
  },
});

const Component = () => {
  return (
    <Provider store={store}>
      <ButtonBar props={store} />
    </Provider>
  );
};

describe('<ButtonBar /> tests', () => {
  it('Expect Text to be available within ButtonBar', () => {
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
    const { getByText } = render(<Component {...store} />);
    const head = getByText(/Your Mission/i);
    expect(head).toBeTruthy();
  });
});
