export const SET_DEV_MODE_STATUS = 'SET_DEV_MODE_STATUS';

export const setDevMode = boolean => {
  return { type: SET_DEV_MODE_STATUS, payload: boolean };
};
