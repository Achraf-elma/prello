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
import organizations from './reducer/organizations';
import card from './reducer/card';
import cards from './reducer/cards';
import labels from './reducer/labels';

const store = createStore(
  combineReducers({
    boards,
    lists,
    list,
    labels,
    checkItem,
    checkList,
    board,
    organization,
    organizations,
    card, 
    cards
  }),
  applyMiddleware(socketDispatch)
  // , require('./bootstrap.json');
);

export default store;