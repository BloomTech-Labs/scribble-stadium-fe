import { GET_CHILDREN, SET_ERROR } from '../actions/childrenActions';

const initialState = {
  children: [],
  errorMessage: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHILDREN:
      return { ...state, children: action.payload };
    case SET_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

export default reducer;
