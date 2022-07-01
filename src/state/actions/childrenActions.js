import axiosWithAuth from '../../utils/axiosWithAuth';
export const GET_CHILDREN = 'GET_CHILDREN';
export const SET_ERROR = 'SET_ERROR';

export const getChidlren = sub => async dispatch => {
  if (localStorage.getItem('isAuthenticated')) {
    console.log('hit2');
    axiosWithAuth()
      .get(`/profiles/${sub}/chidlren`)
      .then(res => {
        dispatch({
          type: GET_CHILDREN,
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
