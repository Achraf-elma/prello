// Modules
import { createStore, combineReducers, applyMiddleware } from 'redux';

// Socket middleWare
import { socketDispatch } from "./request/socket";

// Sub Reducers
import boards from './reducer/boards';
import organization from './reducer/organization';
import organizations from './reducer/organizations';

const store = createStore(
  combineReducers({
    boards,
    organization,
    organizations
  }),
  applyMiddleware(socketDispatch)
  // , require('./bootstrap.json');
);

export default store;