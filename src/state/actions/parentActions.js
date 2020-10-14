export const SET_PARENT = 'SET_PARENT';
export const setParent = parentData => dispatch => {
  dispatch({ type: SET_PARENT, payload: parentData });
};

export const SET_CHILDREN = 'SET_CHILDREN';
export const setChildren = childData => dispatch => {
  dispatch({ type: SET_CHILDREN, payload: childData });
};
