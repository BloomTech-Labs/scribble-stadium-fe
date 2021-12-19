export const SET_CURRACTIVITY = 'SET_CURRACTIVITY';
export const setCurrActivity = currActivity => dispatch => {
  dispatch({ type: SET_CURRACTIVITY, payload: currActivity });
};
