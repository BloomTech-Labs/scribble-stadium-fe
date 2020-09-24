export const SET_PARENT = 'SET_PARENT';
export const setParent = parentData => dispatch => {
  dispatch({ type: SET_PARENT, payload: parentData });
};
