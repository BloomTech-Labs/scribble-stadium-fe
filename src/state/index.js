// istanbul ignore file
/**
 * STEP 1: Create Redux Store
 * [x] add imports to store file
 * [x] create root reducer index file
 * [x] create redux store
 * [x] add provider to your tree
 * [x] apply necessary middleware for actions/logging
 *
 * STEP 2: Create Specific reducers for application state
 * [x] decide on state setup needed for project
 * [x] split into appropriate reducers
 * [x] create initial state shape in each reducer
 * [x] import each reducer into your root reducer
 *
 * STEP 3: Action Creation
 * [x] create root action index file
 * [x] create action files for each reducer and import them into action index
 * [x] figure out what actions you need to update state
 * [x] write action creator functions for each action
 *
 * STEP 4: Connect your application to your redux store
 * [x] decide what parts of the application require state
 * [x] decide what parts of your application can affect state
 * [x] connect the necessary components to your redux store
 * [x] ensure that each component has access to any state values/actions that are needed
 */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReducer from './reducers';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

export const persistor = persistStore(store);

export default { store, persistor };
