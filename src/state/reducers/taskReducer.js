import { global, tasks } from '../actions';

const initialState = {
  id: null,
  child_id: null,
  story_id: null,
  hasRead: false,
  hasWritten: false,
  hasDrawn: false,
  complexity: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case tasks.SET_TASKS:
      return {
        id: action.payload.ID,
        child_id: action.payload.ChildID,
        story_id: action.payload.StoryID,
        hasRead: action.payload.HasRead,
        hasWritten: action.payload.HasWritten,
        hasDrawn: action.payload.HasDrawn,
        complexity: null,
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
    case global.CLEAR_USERS:
      return initialState;
    default:
      return state;
  }
};
