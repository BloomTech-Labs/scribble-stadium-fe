import { GET_PROFILE, SET_ERROR } from '../actions/userActions';

const initialState = {
  profile: {},
  errorMessage: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return { ...state, profile: action.payload };
    case SET_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

export default reducer;
