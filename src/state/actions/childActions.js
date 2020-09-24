export const SET_CHILD = 'SET_CHILD';
export const setChild = childData => dispatch => {
  dispatch({ type: SET_CHILD, payload: childData });
};
