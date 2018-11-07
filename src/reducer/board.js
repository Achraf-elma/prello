// Modules
import { combineReducers } from 'redux';

// Definitions
import {initBoard, SET_BOARD, SET_BOARD_NAME, SET_BOARD_DESC, SET_BOARD_LIST, SET_BOARD_MEMBERSHIPS, SET_BOARD_OWNERS, SET_BOARD_CLOSE, SET_BOARD_PRIVACY} from "../action/actionBoard";

const id = ( state = initBoard.id, action ) => action.type === SET_BOARD ? action.payload.id : state ;
const name = (state = initBoard.name, action ) => {
  switch(action["type"]) {
    case SET_BOARD:
      return action.payload.name
    case SET_BOARD_NAME:
      return action.payload.name
    default:
      return state;
  }
}
const desc = (state = initBoard.desc, action ) => {
  switch(action["type"]) {
    case SET_BOARD:
      return action.payload.desc;
    case SET_BOARD_DESC:
      return action.payload.desc
    default:
      return state;
  }
}
const memberships = (state = initBoard.memberships, action ) => {
  switch(action["type"]) {
    case SET_BOARD:
      return action.payload.name;
    case SET_BOARD_MEMBERSHIPS:
      return action.payload.memberships
    default:
      return state;
  }
}
const owners = (state = initBoard.owners, action ) => {
  switch(action["type"]) {
    case SET_BOARD:
      return action.payload.owners;
    case SET_BOARD_OWNERS:
      return action.payload.owners
    default:
      return state;
  }
}
const closed = (state = initBoard.closed, action ) => {
  switch(action["type"]) {
    case SET_BOARD:
      return action.payload.closed;
    case SET_BOARD_CLOSE:
      return action.payload.closed
    default:
      return state;
  }
}

const isPrivate = (state = initBoard.isPrivate, action ) => {
  switch(action["type"]) {
    case SET_BOARD:
      return action.payload.isPrivate;
    case SET_BOARD_PRIVACY:
      return action.payload.isPrivate
    default:
      return state;
  }
}


// Main Reducer
export default combineReducers({
  id, 
  name, 
  desc, 
  memberships, 
  owners,
  closed, 
  isPrivate
});
