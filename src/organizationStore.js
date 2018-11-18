// Modules
import { createStore, combineReducers } from 'redux';

// Sub Reducers
import boards from './reducer/boards';
import organization from './reducer/organization';
import organizations from './reducer/organizations';

const store = createStore(
  combineReducers({
    boards,
    organization,
    organizations
  })
  // , require('./bootstrap.json');
);

export default store;