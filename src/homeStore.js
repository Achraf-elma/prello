// Modules
import { createStore, combineReducers } from 'redux';

// Sub Reducers
import boards from './reducer/boards';

const store = createStore(
  combineReducers({
    boards,
  })
);

export default store;