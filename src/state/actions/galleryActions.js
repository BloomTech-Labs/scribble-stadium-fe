export const SET_WEEKLY_SUBMISSIONS = 'SET_WEEKLY_SUBMISSIONS';
export const setWeeklySubmissions = submissionInfo => dispatch => {
  dispatch({ type: SET_WEEKLY_SUBMISSIONS, payload: submissionInfo });
};
