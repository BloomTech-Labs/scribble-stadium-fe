import { notifications } from '../actions/index';

const initialState = {};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case notifications.SET_DAILY_NOTIFICATIONS:
      return {
        ...state,
      };
    default:
      return state;
  }
};
