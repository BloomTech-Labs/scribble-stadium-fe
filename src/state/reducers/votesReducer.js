import { global, votes } from '../actions';

const initialState = null;

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case votes.SET_VOTES:
      return [...action.payload];
    case global.CLEAR_USERS:
      return initialState;
    default:
      return state;
  }
};
