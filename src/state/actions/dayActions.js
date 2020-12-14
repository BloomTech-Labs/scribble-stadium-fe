export const SET_DAY = 'SET_DAY';

export const setDay = () => {
  return dispatch => {
    const currentDate = new Date();
    const currentDayOfTheWeek = currentDate.getDay();
    dispatch({
      type: SET_DAY,
      payload: {
        currentDayOfTheWeek: currentDayOfTheWeek,
        currentDate: currentDate,
      },
    });
  };
};
