import { parent } from '../actions';

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
    default:
      return state;
  }
};
