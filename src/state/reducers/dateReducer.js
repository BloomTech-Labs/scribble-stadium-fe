import { date } from '../actions';

const initialState = { costume_date: null };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case date.SET_DATE:
      return { ...state, costume_date: action.payload };
    default:
      return state;
  }
};
