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
        ...state,
        id: action.payload.ID,
        name: action.payload.Name,
        email: action.payload.Email,
        children: action.payload.children,
      };
    case parent.SET_CHILDREN:
      return {
        ...state,
        children: [...state.children, action.payload],
      };
    case global.CLEAR_USERS:
      return initialState;
    default:
      return state;
  }
};
