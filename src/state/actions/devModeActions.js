export const SET_DEV_MODE = 'SET_DEV_MODE';
export const SET_API_URL = 'SET_API_URL';

export const setDevMode = boolean => dispatch => {
  // if boolean true, set isDevModeActive true, if false set it to false
  dispatch({ type: SET_DEV_MODE, payload: boolean });

  /**
   * The second portion of this action sets the global API url
   * if in production && setting devmode true, use dev mode database endpoints
   * if in production && setting devmode false, use production database endpoints
   */
  if (process.env.NODE_ENV === 'production') {
    if (boolean === true) {
      dispatch({
        type: SET_API_URL,
        payload: process.env.REACT_APP_DEV_MODE_DATABASE_ENDPOINT,
      });
    } else {
      dispatch({ type: SET_API_URL, payload: process.env.REACT_APP_API_URI });
    }
  }

  if (process.env.NODE_ENV === 'development') {
    if (boolean === true) {
      dispatch({
        type: SET_API_URL,
        payload: process.env.REACT_APP_DEV_MODE_DATABASE_ENDPOINT,
      });
    } else {
      dispatch({ type: SET_API_URL, payload: process.env.REACT_APP_API_URI });
    }
  }
};
