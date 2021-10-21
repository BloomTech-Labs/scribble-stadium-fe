import { submissions } from '../actions';

const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case submissions.SET_WEEKLY_SUBMISSIONS:
      return [...action.payload];

    default:
      return state;
  }
};
