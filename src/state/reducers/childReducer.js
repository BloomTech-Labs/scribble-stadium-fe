import { child, global } from '../actions';

const initialState = {
  id: null,
  name: null,
  isDyslexic: null,
  avatarUrl: null,
  gradeLevel: null,
  parentId: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case child.SET_CHILD:
      return {
        id: action.payload.ID,
        name: action.payload.Name,
        isDyslexic: action.payload.IsDyslexic,
        avatarUrl: action.payload.AvatarURL,
        gradeLevel: action.payload.GradeLevel,
        parentId: action.payload.ParentID,
      };
    case global.CLEAR_USERS:
      return initialState;
    default:
      return state;
  }
};
