import { getChildByID } from '../../api/index.js';

export const SET_WEEKLY_SUBMISSIONS = 'SET_WEEKLY_SUBMISSIONS';
export const setWeeklySubmissions = id => dispatch => {
  getChildByID(id).then(res =>
    dispatch({ type: SET_WEEKLY_SUBMISSIONS, payload: res.data })
  );
};
