import { SET_CURRACTIVITY } from '../actions/currentActivityActions';

const initialState = {
  currActivity: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRACTIVITY:
      return { currActivity: action.payload };
    default:
      return state;
  }
};
