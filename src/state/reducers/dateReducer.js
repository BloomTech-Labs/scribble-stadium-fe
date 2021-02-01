import { date } from '../actions';

const initialState = { custom_date: null };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case date.SET_DATE:
      return { ...state, custom_date: action.payload };
    default:
      return state;
  }
};
