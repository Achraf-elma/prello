// Modules
import { createStore, combineReducers } from 'redux';

// State types
import { ApplicationState } from './type';

// Sub Reducers
// import board from './reducer/board';
// import list from './reducer/list';
import card from './reducer/card';

export default createStore(
  combineReducers<ApplicationState>({
    // board,
    // list,
    card,
  })
  // , require('./bootstrap.json');
);