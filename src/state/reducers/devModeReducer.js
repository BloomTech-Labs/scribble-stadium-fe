import { SET_DEV_MODE_STATUS } from '../actions/devModeActions';

const initialState = {
  isDevModeActive: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEV_MODE_STATUS:
      return {
        ...state,
        isDevModeActive: action.payload,
      };
    default:
      return state;
  }
};
