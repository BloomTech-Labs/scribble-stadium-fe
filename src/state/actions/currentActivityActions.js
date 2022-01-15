import axios from 'axios';

export const SET_CURRACTIVITY = 'SET_CURRACTIVITY';

export const FETCHING_QUOTE_START = 'FETCHING_QUOTE_START';
export const FETCHING_QUOTE_SUCCESS = 'FETCHING_QUOTE_SUCCESS';
export const FETCHING_QUOTE_FAILURE = 'FETCHING_QUOTE_FAILURE';

export const setCurrActivity = currActivity => dispatch => {
  dispatch({ type: SET_CURRACTIVITY, payload: currActivity });
};

export const getQuote = () => dispatch => {
  dispatch({ type: FETCHING_QUOTE_START });
  axios
    // This is a mock API that's being used as the BE is being built.
    // Feel free to create a POST request to the appropriate endpoints once they're available.
    .get('https://api.adviceslip.com/advice')
    .then(res => {
      dispatch({ type: FETCHING_QUOTE_SUCCESS, payload: res.data.slip.advice });
      console.log(res);
    })
    .catch(err => {
      dispatch({
        type: FETCHING_QUOTE_FAILURE,
        payload: err.response.message,
      });
      console.log(err);
    });
};
