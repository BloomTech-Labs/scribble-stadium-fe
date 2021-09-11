import { global, team } from '../actions';

const initialState = {
  teamName: '',
  child1: {},
  child2: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case team.SET_TEAM_SUBMISSIONS:
      let teamName, child1, child2;
      for (let key in action.payload) {
        if (key === 'name') {
          teamName = action.payload.name;
        } else {
          if (child1) {
            child2 = action.payload[key];
          } else {
            child1 = action.payload[key];
          }
        }
      }
      return {
        ...state,
        teamName,
        child1,
        child2,
      };
    case global.CLEAR_USERS:
      return initialState;
    default:
      return state;
  }
};
