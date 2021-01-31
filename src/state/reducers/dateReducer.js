import { costume_date } from '../actions';

const initialState = null;

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case costume_date.SET_DATE:
      return { costume_date: action.payload };
    default:
      return state;
  }
};
