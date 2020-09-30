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
        id: action.payload.id,
        child_id: action.payload.child_id,
        story_id: action.payload.story_id,
        hasRead: action.payload.read,
        hasWritten: action.payload.write,
        hasDrawn: action.payload.draw,
      };
    default:
      return state;
  }
};
