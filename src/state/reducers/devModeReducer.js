const SET_DEV_MODE = 'SET_DEV_MODE';

const initialState = {
  isDevModeActive: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEV_MODE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
