import axios from 'axios';

const axiosWithAuth = () => {
  return axios.create({
    baseURL: process.env.REACT_APP_API_URI,
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('idToken'),
    },
  });
};

export default axiosWithAuth;
