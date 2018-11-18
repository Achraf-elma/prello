// Modules
import { combineReducers } from 'redux';

// Definitions
// TODO: import type, action type & type constants
import { MOVE_LIST_IN_BOARD } from '../action/actionBoard'
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
const isClosed = ( state = initList.isClosed, action ) => {
  switch(action["type"]) {
    case SET_LIST_CLOSED:
      return action.payload.isClosed
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
const position = (state = initList.position, action ) => {
  switch(action["type"]) {
    case SET_LIST_POSITION:
    case MOVE_LIST_IN_BOARD:
      return action.payload.position
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
  isClosed,
  idBoard,
  position ,
  subscribed,
  })
 