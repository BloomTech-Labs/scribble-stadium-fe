const SET_DEV_MODE = 'SET_DEV_MODE';

const initialState = {
  isDevModeActive: false,
};

/**
 * devMode state
 * It is intended that when isDevModeActive: true, relevant API calls will transition
 *      to hit devMode database instead of primary database,
 *      this allows devMode to be separate from the real database (usable in production)
 *
 * It is also important to ensure that when dev mode turns off the MODIFIED state returns to normal
 *      at the very least, it should be ensured that modified states will correct themselves
 *      this is important to look into in the future
 */
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
