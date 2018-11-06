// Modules
import { createStore, combineReducers, applyMiddleware } from 'redux';

// Socket middleWare
import { socketDispatch } from "./socket";

// Sub Reducers
import boards from './reducer/boards';
import board from './reducer/board';
import checkItem from './reducer/checkItem';
import checkList from './reducer/checklist';
import list from './reducer/list';
import lists from './reducer/lists';
import organization from './reducer/organization';
import card from './reducer/card';
import cards from './reducer/cards';

const store = createStore(
  combineReducers({
    boards,
    lists,
    list,
    checkItem,
    checkList,
    board,
    organization,
    card, 
    cards
  }),
  applyMiddleware(socketDispatch)
  // , require('./bootstrap.json');
);

export default store;