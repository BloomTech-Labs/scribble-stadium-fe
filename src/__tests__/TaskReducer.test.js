import { tasks } from '../state/actions';
import { reducer } from '../state/reducers/taskReducer';

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
    const action = {
      type: tasks.SET_TASKS,
      payload: {
        ID: 1,
        ChildID: 1,
        StoryID: 1,
        HasRead: false,
        HasWritten: false,
        HasDrawn: false,
        Complexity: false,
      },
    };
    const state = reducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      id: 1,
      child_id: 1,
      story_id: 1,
      hasRead: false,
      hasWritten: false,
      hasDrawn: false,
      complexity: false,
    });
  });

  it('should return initialstate with value of hasRead true', () => {
    const action = { type: tasks.SET_HAS_READ };
    const state = reducer(initialState, action);
    expect(state).toEqual({ ...initialState, hasRead: true });
  });
});
