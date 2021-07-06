import { notifications } from '../actions/index';

const initialState = {
  ID: null,
  Text: null,
  Type: null,
  LinksTo: null,
  Date: date.now(),
  DueDate: null,
  ChildID: null,
  ParentID: null,
};

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
