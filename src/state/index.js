/**
 * STEP 1: Create Redux Store
 * [ ] add imports to store file
 * [ ] create root reducer index file
 * [ ] create redux store
 * [ ] apply necessary middleware for actions/logging
 * [ ] add provider to your tree
 *
 * STEP 2: Create Specific reducers for application state
 * [ ] decide on state setup needed for project
 * [ ] split into appropriate reducers
 * [ ] create initial state shape in each reducer
 * [ ] import each reducer into your root reducer
 *
 * STEP 3: Action Creation
 * [ ] create root action index file
 * [ ] create action files for each reducer and import them into action index
 * [ ] figure out what actions you need to update state
 * [ ] write action creator functions for each action
 *
 * STEP 4: Connect your application to your redux store
 * [ ] decide what parts of the application require state
 * [ ] decide what parts of your application can affect state
 * [ ] connect the necessary components to your redux store
 * [ ] ensure that each component has access to any state values/actions that are needed
 */

import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers';

const store = createStore(rootReducer);

export default store;
