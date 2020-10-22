// import all of your reducers into this file, and export them back out.
// This allows for the simplification of flow when importing reducers into your actions throughout your app.
import { combineReducers } from 'redux';

import { reducer as child } from './childReducer';
import { reducer as parent } from './parentReducer';
import { reducer as tasks } from './taskReducer';
import { reducer as team } from './teamReducers';

export default combineReducers({
  child,
  parent,
  tasks,
  team,
});
