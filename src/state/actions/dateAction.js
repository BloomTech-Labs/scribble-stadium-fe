export const SET_DATE = 'SET_DATE';
export const setDate = date => dispatch => {
  dispatch({ type: SET_DATE, payload: date });
};
