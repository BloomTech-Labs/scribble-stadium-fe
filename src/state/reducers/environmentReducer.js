import { SET_API_URL } from '../actions/devModeActions';

const initialState = {
  baseUrl: process.env.REACT_APP_API_URI,
};

/**
 * This reducer is home to the global API baseUrl
 * the baseUrl and devMode state are connected (see setDevMode action creator),
 *       so be cautious if you are adding new baseUrl-related action creators in the future.
 */
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_API_URL:
      return {
        ...state,
        baseUrl: action.payload,
      };
    default:
      return state;
  }
};
