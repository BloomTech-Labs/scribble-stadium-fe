export const SET_PARENT = 'SET_PARENT';
export const setParent = parentData => dispatch => {
  dispatch({ type: SET_PARENT, payload: parentData });
};

export const SET_CHILDREN = 'SET_CHILDREN';
export const setChildren = childData => dispatch => {
  dispatch({ type: SET_CHILDREN, payload: childData });
};

export const UPDATE_CHILD = 'UPDATE_CHILD';
export const updateChild = childData => dispatch => {
  dispatch({ type: UPDATE_CHILD, payload: childData });
};

export const REMOVE_CHILD = 'REMOVE_CHILD';
export const removeChild = childID => dispatch => {
  dispatch({ type: REMOVE_CHILD, payload: childID });
};
