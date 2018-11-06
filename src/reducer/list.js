// Modules
import { combineReducers } from 'redux';

// Definitions
// TODO: import type, action type & type constants
//import {initList, SET_LIST_POSITION,SET_LIST_CLOSED, setListClosed, setListPosition, SET_LIST_NAME, SET_LIST_BOARD, SET_LIST_SUBSCRIBED }from "../action/actionList";
import {initList, SET_LIST_POSITION,SET_LIST_CLOSED, SET_LIST_NAME, SET_LIST_BOARD, SET_LIST_SUBSCRIBED }from "../action/actionList";

const idList = ( state = initList.idList, action ) => state
const name = ( state = initList.name, action ) => {
  switch(action["type"]) {
    case SET_LIST_NAME:
      return action.payload.name
    default:
      return state;
  }
}
const closed = ( state = initList.closed, action ) => {
  switch(action["type"]) {
    case SET_LIST_CLOSED:
      return action.payload.closed
    default:
      return state;
  }
}
const idBoard = ( state = initList.idBoard, action ) => {
  switch(action["type"]) {
    case SET_LIST_BOARD:
      return action.payload.idBoard
    default:
      return state;
  }
}
const pos = ( state = initList.pos, action ) => {
  switch(action["type"]) {
    case SET_LIST_POSITION:
      return action.payload.pos
    default:
      return state;
  }
}
const subscribed = ( state = initList.subscribed, action ) => {
  switch(action["type"]) {
  case SET_LIST_SUBSCRIBED:
    return action.payload.subscribed
  default:
    return state;
  }  
}


/*const cards = (
  // TODO: Add state and default state,
  // TODO: Add Action
) => {
  // TODO: Switch case
}*/

// Main Reducer
export default combineReducers({
  // TODO: Add reducers, done
  idList ,
  name,
  closed,
  idBoard,
  pos ,
  subscribed,
  })
 