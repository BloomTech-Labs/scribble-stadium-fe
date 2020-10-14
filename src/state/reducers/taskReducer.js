import { global, tasks } from '../actions';

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

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case tasks.SET_TASKS:
      return {
        ...state,
        id: action.payload.ID,
        child_id: action.payload.ChildID,
        story_id: action.payload.StoryID,
        hasRead: action.payload.HasRead,
        hasWritten: action.payload.HasWritten,
        hasDrawn: action.payload.HasDrawn,
        complexity: action.payload.Complexity,
      };
    case tasks.SET_HAS_READ:
      return {
        ...state,
        hasRead: true,
      };
    case tasks.SET_HAS_WRITTEN:
      return {
        ...state,
        hasWritten: true,
      };
    case tasks.SET_HAS_DRAWN:
      return {
        ...state,
        hasDrawn: true,
      };
    case tasks.SET_SUBMISSION_INFORMATION:
      return {
        ...state,
        story: {
          writingPrompt: action.payload.WritingPrompt,
          drawingPrompt: action.payload.DrawingPrompt,
          storyTitle: action.payload.Title,
          storyUrl: action.payload.URL,
        },
      };
    case global.CLEAR_USERS:
      return initialState;
    default:
      return state;
  }
};
