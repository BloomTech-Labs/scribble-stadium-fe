import { date } from '../actions';

const initialState = { custom_date: null, custom_hour: null };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case date.SET_DATE:
      return { ...state, custom_date: action.payload };
    case date.SET_HOUR:
      return { ...state, custom_hour: action.payload };
    default:
      return state;
  }
};
