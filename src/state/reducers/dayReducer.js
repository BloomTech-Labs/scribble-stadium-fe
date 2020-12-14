import { day } from '../actions';

const initialState = {
  currentDate: null,
  currentDayOfTheWeek: null,
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case day.SET_DAY:
      return {
        currentDate: action.payload.currentDate,
        currentDayOfTheWeek: action.payload.currentDayOfTheWeek,
      };
    default:
      return state;
  }
};
