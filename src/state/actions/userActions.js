import axiosWithAuth from '../../utils/axiosWithAuth';
export const GET_PROFILE = 'GET_PROFILE';
export const SET_ERROR = 'SET_ERROR';

function parseJwt(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );

  return JSON.parse(jsonPayload);
}

export const getProfile = () => async dispatch => {
  if (localStorage.getItem('isAuthenticated')) {
    console.log('hit');
    axiosWithAuth()
      .get(`/profiles/${parseJwt(localStorage.getItem('idToken')).sub}`)
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
