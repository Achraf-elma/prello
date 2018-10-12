// Modules
import { createStore, combineReducers } from 'redux';

// Sub Reducers
// import board from './reducer/board';
// import list from './reducer/list';
import checkItem from './reducer/checkItem';

export default createStore(
  combineReducers({
    // board,
    // list,
    checkItem,
    
  })
  // , require('./bootstrap.json');
);