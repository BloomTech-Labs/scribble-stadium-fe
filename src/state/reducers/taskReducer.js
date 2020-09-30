import { tasks } from '../actions';

const initialState = {
  id: null,
  child_id: null,
  story_id: null,
  hasRead: false,
  hasWritten: false,
  hasDrawn: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case tasks.SET_TASKS:
      return {
        id: action.payload.ID,
        child_id: action.payload.ChildId,
        story_id: action.payload.StoryId,
        hasRead: action.payload.HasRead,
        hasWritten: action.payload.HasWritten,
        hasDrawn: action.payload.HasDrawn,
      };
    default:
      return state;
  }
};
