import { global, votes } from '../actions';

const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case votes.SET_VOTES:
      return [...state, action.payload];
    case global.CLEAR_USERS:
      return initialState;
    default:
      return state;
  }
};
