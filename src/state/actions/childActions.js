export const SET_CHILD = 'SET_CHILD';
export const setChild = childData => dispatch => {
  dispatch({ type: SET_CHILD, payload: childData });
};

export const SET_MEMBER_ID = 'SET_MEMBER_ID';
export const setMemberId = memberId => dispatch => {
  dispatch({ type: SET_MEMBER_ID, payload: memberId });
};
