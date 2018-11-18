// Modules
import { createStore, combineReducers, applyMiddleware } from 'redux';

// Socket middleWare
import { socketDispatch } from "./request/socket";

// Sub Reducers
import board from './reducer/board';
import checkItem from './reducer/checkItem';
import checkList from './reducer/checklist';
import checkLists from './reducer/checklists';
import list from './reducer/list';
import lists from './reducer/lists';
import card from './reducer/card';
import cards from './reducer/cards';
import labels from './reducer/labels';
import comments from './reducer/comments';
const store = createStore(
  combineReducers({
    comments,
    lists,
    list,
    labels,
    checkItem,
    checkList,
    checkLists,
    board,
    card, 
    cards
  }),
  applyMiddleware(socketDispatch)
  // , require('./bootstrap.json');
);

export default store;