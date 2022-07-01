import { combineReducers } from 'redux';
import userReducer from './userReducer';
import childrenReducer from './childrenReducer';

const rootReducer = combineReducers({
  userReducer,
  childrenReducer,
});

export default rootReducer;
