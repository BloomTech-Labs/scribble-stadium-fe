import { currActivity } from '../actions';

const initialState = {
  currActivity: 'read',
  quote: 'this is a quote',
};

export const FETCHING_QUOTE_START = 'FETCHING_QUOTE_START';
export const FETCHING_QUOTE_SUCCESS = 'FETCHING_QUOTE_SUCCESS';
export const FETCHING_QUOTE_FAILURE = 'FETCHING_QUOTE_FAILURE';

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case currActivity.SET_CURRACTIVITY:
      return { currActivity: action.payload };
    default:
      return state;
  }
};

export const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_QUOTE_START:
      return { ...state, loading: true };
    case FETCHING_QUOTE_SUCCESS:
      console.log('fetching success', action.payload);
      return { ...state, quote: action.payload, loading: false };
    case FETCHING_QUOTE_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
