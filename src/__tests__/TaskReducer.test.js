import { reducer } from '../state/reducers/taskReducer';
import * as tasks from '../state/actions';

describe('taskReducer test suite', () => {
  const initialState = {
    id: null,
    child_id: null,
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
  };

  it('should return the initial state', () => {
    const action = { type: tasks.SET_TASKS, payload: {} };
    const state = reducer(initialState, action);
    expect(state).toEqual(initialState);
  });
});
