export const SET_WEEKLY_SUBMISSIONS = 'SET_WEEKLY_SUBMISSIONS';
export const setWeeklySubmissions = id => dispatch => {
  // const child = await getChildByID(id);
  dispatch({ type: SET_WEEKLY_SUBMISSIONS, payload: {} });
};
