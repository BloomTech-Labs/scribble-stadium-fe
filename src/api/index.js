import axios from 'axios';

// we will define a bunch of API calls here.
const apiUrl = 'http://localhost:8000' || process.env.REACT_APP_API_URI;

const sleep = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

const getExampleData = () => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/photos?albumId=1`)
    .then(response => response.data);
};

const getAuthHeader = authState => {
  if (!authState.isAuthenticated) {
    throw new Error('Not authenticated');
  }
  return { Authorization: `Bearer ${authState.idToken}` };
};

const getDSData = (url, authState) => {
  // here's another way you can compose together your API calls.
  // Note the use of GetAuthHeader here is a little different than in the getProfileData call.
  const headers = getAuthHeader(authState);
  if (!url) {
    throw new Error('No URL provided');
  }
  return axios
    .get(url, { headers })
    .then(res => JSON.parse(res.data))
    .catch(err => err);
};

const apiAuthGet = (endpoint, authHeader) => {
  return axios.get(`${apiUrl}${endpoint}`, { headers: authHeader });
};
const apiAuthPost = (endpoint, body, authHeader) => {
  return axios.post(`${apiUrl}${endpoint}`, body, { headers: authHeader });
};

const postNewChild = (authState, child) => {
  try {
    return apiAuthPost('/child', child, getAuthHeader(authState)).then(
      response => response.data
    );
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return [];
    });
  }
};
const getProfileData = authState => {
  try {
    return apiAuthGet('/profiles', getAuthHeader(authState)).then(
      response => response.data
    );
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return [];
    });
  }
};

const getStory = (authState, id) => {
  try {
    return apiAuthGet(`/stories/${id}`, getAuthHeader(authState)).then(
      response => response.data
    );
  } catch (error) {
    return new Promise(() => {
      console.log(error);
    });
  }
};
/**
 * Reads in gradelevels and avatars from the database to enforce referential integrity
 * @param {Object} authState necessary for API functionality
 * @returns {Promise} a promise that resolves to an array of [[avatars], [gradeLevels]]
 */
const getChildFormValues = async authState => {
  try {
    return Promise.all([
      apiAuthGet('/avatars', getAuthHeader(authState)),
      apiAuthGet('/gradelevels', getAuthHeader(authState)),
    ]).then(res => {
      return res.map(x => x.data);
    });
  } catch (err) {
    return new Promise(() => {
      console.log(err);
      return [];
    });
  }
};

const postNewAvatar = async (authState, body) => {
  try {
    return apiAuthPost('/avatars', body, getAuthHeader(authState)).then(
      res => res.data
    );
  } catch (err) {
    console.log(err);
    return [];
  }
};

export {
  sleep,
  getExampleData,
  getProfileData,
  getDSData,
  apiAuthGet,
  getStory,
  getAuthHeader,
  apiAuthPost,
  postNewChild,
  getChildFormValues,
  postNewAvatar,
};
