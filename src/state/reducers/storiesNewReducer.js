import { storiesNew } from '../actions';

const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case storiesNew.GET_NEW_STORIES:
      return [...action.payload];

    default:
      return state;
  }
};
