import { getChildByID } from '../../api';
export const SET_WEEKLY_SUBMISSIONS = 'SET_WEEKLY_SUBMISSIONS';
export const setWeeklySubmissions = id => dispatch => {
  const child = getChildByID(id);
  dispatch({ type: SET_WEEKLY_SUBMISSIONS, payload: { child } });
};
