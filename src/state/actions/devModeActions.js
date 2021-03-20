export const SET_DEV_MODE = 'SET_DEV_MODE';

export const setDevMode = boolean => {
  return { type: SET_DEV_MODE, payload: boolean };
};
