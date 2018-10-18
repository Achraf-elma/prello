// Modules
import { createStore, combineReducers, applyMiddleware } from 'redux';

// Socket middleWare
import { socketDispatch } from "./socket";

// Sub Reducers
import board from './reducer/board';
import checkItem from './reducer/checkItem';
import checkList from './reducer/checklist';
import list from './reducer/list';
import lists from './reducer/lists';
import organization from './reducer/organization';
import card from './reducer/card';

export default createStore(
  combineReducers({
    lists,
    list,
    checkItem,
    checkList,
    board,
    organization,
    card
  }),
  applyMiddleware(socketDispatch)
  // , require('./bootstrap.json');
);
