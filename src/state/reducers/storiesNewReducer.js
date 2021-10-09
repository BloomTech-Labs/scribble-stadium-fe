// import { getNewStories } from '../actions';

const initialState = {
  ID: null,
  Title: '',
  Description: '',
  Author: '',
  Episodes: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEW_STORIES:
      return {
        ...state,
        ID: action.payload.ID,
        Title: action.payload.Title,
        Description: action.payload.Description,
        Author: action.payload.Author,
        Episodes: [...action.payload.Episodes],
      };

    default:
      return state;
  }
};
