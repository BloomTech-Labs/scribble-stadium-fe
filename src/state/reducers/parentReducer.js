import { parent, global } from '../actions';

const initialState = {
  id: null,
  name: null,
  email: null,
  children: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case parent.SET_PARENT:
      return {
        id: action.payload.ID,
        name: action.payload.Name,
        email: action.payload.Email,
        children: action.payload.children,
      };
    case global.clearUsers:
      return initialState;
    default:
      return state;
  }
};
