// Modules
import { createStore, combineReducers } from 'redux';

// Sub Reducers
import board from './reducer/board';
import checkItem from './reducer/checkItem';
import checkList from './reducer/checklist';
import list from './reducer/list';
import lists from './reducer/lists';
import organisation from './reducer/organisation';


export default createStore(
  combineReducers({
    lists,
    list,
    checkItem,
    checkList,
    board,
    organisation
  })
  // , require('./bootstrap.json');
);
