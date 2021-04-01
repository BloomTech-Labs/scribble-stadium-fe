export const SET_DATE = 'SET_DATE';
export const SET_HOUR = 'SET_HOUR';
export const setDate = date => dispatch => {
  dispatch({ type: SET_DATE, payload: date });
};

export const setHour = hour => dispatch => {
  dispatch({ type: SET_HOUR, payload: hour });
};
