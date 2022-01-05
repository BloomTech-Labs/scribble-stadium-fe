import { currActivity } from '../actions';

const initialState = {
  currActivity: 'read',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case currActivity.SET_CURRACTIVITY:
      return { currActivity: action.payload };
    default:
      return state;
  }
};
