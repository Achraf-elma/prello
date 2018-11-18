// Modules
import { combineReducers } from 'redux';
import { MOVE_LIST_IN_BOARD, ADD_LIST_TO_BOARD, ADD_SET_LABEL_TO_BOARD } from '../action/actionBoard';

// Definitions
import {
  initBoard,
  SET_BOARD,
  SET_BOARD_NAME,
  SET_BOARD_DESC,
  SET_BOARD_CLOSE,
  SET_BOARD_PRIVACY
} from "../action/actionBoard";

import {
  ADD_MEMBER_TO_BOARD,
  REMOVE_MEMBER_FROM_BOARD,
  SET_BOARD_OWNER,
  REMOVE_ORGANIZATION_FROM_BOARD,
  ADD_ORGANIZATION_TO_BOARD
} from "../action/actionMembers";

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
const members = (state = initBoard.members, action ) => {
  switch(action["type"]) {
    case SET_BOARD:
    case REMOVE_MEMBER_FROM_BOARD:
      return state.filter(member => member.id !== action.payload);
    case ADD_MEMBER_TO_BOARD:
      return [...state, action.payload];
    case SET_BOARD_OWNER:
      return [...state.filter(member => member.id !== action.payload.idOwner), action.payload.member];
    default:
      return state;
  }
}
const organizations = (state = initBoard.organizations, action) => {
  switch (action["type"]) {
    case SET_BOARD:
      return action.payload.organizations;
    case REMOVE_ORGANIZATION_FROM_BOARD:
      return state.filter(organization => organization.id !== action.payload);
    case ADD_ORGANIZATION_TO_BOARD:
      return [...state, action.payload];
    default:
      return state;
  }
}

const idOwner = (state = initBoard.idOwner, action ) => {
  switch(action["type"]) {
    case SET_BOARD:
      return action.payload.idOwner;
    case SET_BOARD_OWNER:
      return action.payload.idOwner
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
  members, 
  idOwner,
  closed, 
  isPublic,
  labelNames,
  organizations
});
