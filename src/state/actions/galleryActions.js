import { getGallerySubmissionsById } from '../../api/index.js';

export const SET_WEEKLY_SUBMISSIONS = 'SET_WEEKLY_SUBMISSIONS';
export const setWeeklySubmissions = id => dispatch => {
  getGallerySubmissionsById(id).then(res =>
    dispatch({ type: SET_WEEKLY_SUBMISSIONS, payload: res })
  );