import { submissions } from '../actions';

const initialState = {
  ID: null,
  Name: '',
  Submissions: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case submissions.SET_WEEKLY_SUBMISSIONS:
      return {
        ...state,
        ID: action.payload.ID,
        Name: action.payload.Name,
        Submissions: [...action.payload.Submissions],
      };

    default:
      return state;
  }
};
