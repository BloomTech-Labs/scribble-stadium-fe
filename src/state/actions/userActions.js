import axiosWithAuth from '../../utils/axiosWithAuth';
export const GET_PROFILE = 'GET_PROFILE';
export const SET_ERROR = 'SET_ERROR';

export const getProfile = sub => async dispatch => {
  if (localStorage.getItem('isAuthenticated')) {
    console.log('hit');
    axiosWithAuth()
      .get(`/profiles/${sub}`)
      .then(res => {
        dispatch({
          type: GET_PROFILE,
          payload: res.data,
        });
      })
      .catch(err => {
        dispatch({
          type: SET_ERROR,
          payload: err.message,
        });
      });
  }
};
