// Modules
import { createStore, combineReducers } from 'redux';

// State types
import {Card} from './type';

// Sub Reducers
// import board from './reducer/board';
// import list from './reducer/list';
import card from './reducer/card';

interface ApplicationState {
  // board: Board,
  // list: List,
  card: Card,
}

export default createStore(
  combineReducers<ApplicationState>({
    // board,
    // list,
    card,
  })
  // , require('./bootstrap.json');
);