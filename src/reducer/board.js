// Modules
import { combineReducers } from 'redux';

// Definitions
// TODO: action type constants
import {initBoard, SET_BOARD_CLOSE, SET_BOARD_DESC} from "../action/actionBoard";

const id = ( state = initBoard.id, action ) => state
const name = (state = initBoard.name, action ) => state
const desc = (state = initBoard.desc, action ) => {
  switch(action["type"]) {
    case SET_BOARD_DESC:
      return action.payload.desc
    default:
      return state;
  }
}

const memberships = (state = initBoard.memberships, action ) => state
const closed = (state = initBoard.closed, action ) => {
  switch(action["type"]) {
    case SET_BOARD_CLOSE:
      return action.payload.closed
    default:
      return state;
  }
}

const pos = (state = initBoard.pos, action ) => state


// Main Reducer
export default combineReducers({
  id, 
  name, 
  desc, 
  memberships, 
  closed, 
  pos
});
