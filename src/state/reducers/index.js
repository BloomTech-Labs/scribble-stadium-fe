import { combineReducers } from 'redux';

import parentReducer from './parentReducer';
import childReducer from './childReducer';
import adminReducer from './adminReducer';

const reducer = combineReducers({
  parentReducer,
  childReducer,
  adminReducer,
});

export default reducer;
