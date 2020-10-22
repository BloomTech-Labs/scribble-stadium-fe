import { child, global } from '../actions'; 

const initialState = {
  id: null,
  name: null,
  isDyslexic: null,
  avatarUrl: null,
  gradeLevel: null,
  parentId: null,
  cohortId: null,
  memberId: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case child.SET_CHILD:
      return {
        ...state,
        id: action.payload.ID,
        name: action.payload.Name,
        isDyslexic: action.payload.IsDyslexic,
        avatarUrl: action.payload.AvatarURL,
        gradeLevel: action.payload.GradeLevel,
        parentId: action.payload.ParentID,
        cohortId: action.payload.CohortID,
      };
    case child.SET_MEMBER_ID:
      return {
        ...state,
        memberId: action.payload.MemberID
      };
    case global.CLEAR_USERS:
      return initialState;
    default:
      return state;
  }
};
