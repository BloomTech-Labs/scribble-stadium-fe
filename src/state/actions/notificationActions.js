export const SET_DAILY_NOTIFICATIONS = 'SET_DAILY_NOTIFICATIONS';
export const setDailyNotifications = notificationInfo => dispatch => {
  dispatch({
    type: SET_DAILY_NOTIFICATIONS,
    loading: false,
    payload: notificationInfo,
  });
};
