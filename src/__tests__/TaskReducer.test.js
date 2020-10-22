import { tasks, global } from '../state/actions';
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

  it('should return changes to the state', () => {
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

  it('should return initialstate with value of hasWrtten true', () => {
    const action = { type: tasks.SET_HAS_WRITTEN };
    const state = reducer(initialState, action);
    expect(state).toEqual({ ...initialState, hasWritten: true });
  });

  it('should return initialstate with value of hasDrawn true', () => {
    const action = { type: tasks.SET_HAS_DRAWN };
    const state = reducer(initialState, action);
    expect(state).toEqual({ ...initialState, hasDrawn: true });
  });

  it('should return initialstate with submissioninformation filled out', () => {
    const action = {
      type: tasks.SET_SUBMISSION_INFORMATION,
      payload: {
        ...initialState,
        DrawingPrompt: 'drawing',
        WritingPrompt: 'writing',
        Title: 'title',
        URL: 'storyurl',
      },
    };
    const state = reducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      story: {
        drawingPrompt: 'drawing',
        writingPrompt: 'writing',
        storyTitle: 'title',
        storyUrl: 'storyurl',
      },
    });
  });

  it('should return initial state when clearusers is called', () => {
    const action = { type: global.CLEAR_USERS };
    const state = reducer(initialState, action);
    expect(state).toEqual(initialState);
  });

  it('should return initialstate if no action is passed in', () => {
    const action = { type: null };
    const state = reducer(initialState, action);
    expect(state).toEqual(initialState);
  });
});
