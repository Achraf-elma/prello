// Modules
import { combineReducers } from 'redux';
import { MOVE_LIST_IN_BOARD, ADD_LIST_TO_BOARD, ADD_SET_LABEL_TO_BOARD } from '../action/actionBoard';

// Definitions
import {initBoard, SET_BOARD, SET_BOARD_NAME, SET_BOARD_DESC, SET_BOARD_MEMBERSHIPS, SET_BOARD_OWNERS, SET_BOARD_CLOSE, SET_BOARD_PRIVACY} from "../action/actionBoard";

const id = ( state = initBoard.id, action ) => action.type === SET_BOARD ? action.payload._id : state ;
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
      return action.payload.desc || "";
    case SET_BOARD_DESC:
      return action.payload.desc;
    default:
      return state;
  }
}
const memberships = (state = initBoard.memberships, action ) => {
  switch(action["type"]) {
    case SET_BOARD:
      return action.payload.idMembers;
    case SET_BOARD_MEMBERSHIPS:
      return action.payload.memberships
    default:
      return state;
  }
}
const owners = (state = initBoard.owners, action ) => {
  switch(action["type"]) {
    case SET_BOARD:
      return action.payload.idOwner;
    case SET_BOARD_OWNERS:
      return action.payload.owners
    default:
      return state;
  }
}
const closed = (state = initBoard.closed, action ) => {
  switch(action["type"]) {
    case SET_BOARD:
      return action.payload.isClosed;
    case SET_BOARD_CLOSE:
      return action.payload.closed
    default:
      return state;
  }
}

const lists = ( state = [], action) => {
  switch(action.type) {
    case SET_BOARD:
    return action.payload.lists|| "";
    case MOVE_LIST_IN_BOARD:
      let listToMove = state[action.payload.listToMovePos];
      let lists = state.filter((list, index) => index !== action.payload.listToMovePos);
      return [
        ...lists.slice(0, action.payload.newListPos),
        listToMove,
        ...lists.slice(action.payload.newListPos)
      ];
    default:
      return state;
  }
}

const isPublic = (state = initBoard.isPublic, action ) => {
  switch(action["type"]) {
    case SET_BOARD:
      return action.payload.isPublic;
    case SET_BOARD_PRIVACY:
      return action.payload.isPublic
    default:
      return state;
  }
}

const labelNames = (state = initBoard.labelNames, action ) => {
  switch(action["type"]) {
    case SET_BOARD:
      return action.payload.labelNames || {};
    case ADD_SET_LABEL_TO_BOARD:
      state[action.payload.color] = action.payload.name;
      return state;
    default:
      return state;
  }
}

// Main Reducer
export default combineReducers({
  id, 
  name, 
  desc,
  lists, 
  memberships, 
  owners,
  closed, 
  isPublic,
  labelNames
});
