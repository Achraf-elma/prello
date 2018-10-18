// Modules
import { createStore, combineReducers } from 'redux';

// Sub Reducers
import board from './reducer/board';
import checkItem from './reducer/checkItem';
import checkList from './reducer/checklist';
import list from './reducer/list';
import lists from './reducer/lists';
import organisation from './reducer/organisation';
import card from './reducer/card';

export default createStore(
  combineReducers({
    lists,
    list,
    checkItem,
    checkList,
    board,
    organisation,
    card
  })
  // , require('./bootstrap.json');
);
