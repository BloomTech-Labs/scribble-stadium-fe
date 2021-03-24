// import all of your reducers into this file, and export them back out.
// This allows for the simplification of flow when importing reducers into your actions throughout your app.
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { reducer as child } from './childReducer';
import { reducer as parent } from './parentReducer';
import { reducer as tasks } from './taskReducer';
import { reducer as team } from './teamReducers';
import { reducer as faceoffs } from './faceoffsReducer';
import { reducer as votes } from './votesReducer';
import { reducer as date } from './dateReducer';
import { reducer as devMode } from './devModeReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['child', 'parent'],
};

const rootReducer = combineReducers({
  child,
  parent,
  tasks,
  team,
  faceoffs,
  votes,
  date,
  devMode,
});

export default persistReducer(persistConfig, rootReducer);
