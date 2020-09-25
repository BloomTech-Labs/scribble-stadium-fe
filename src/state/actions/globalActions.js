export const CLEAR_USERS = 'CLEAR_USERS';
export const clearUsers = () => dispatch => {
  dispatch({ type: CLEAR_USERS });
};
