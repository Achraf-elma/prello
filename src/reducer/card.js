// Modules
import { combineReducers } from 'redux';

// Definitions
// TODO: import type, action type & type constants
//import {initCard, SET_CARD_POSITION,SET_CARD_CLOSED, setCARDClosed, setCARDPosition, SET_CARD_NAME, SET_CARD_LIST, SET_CARD_SUBSCRIBED }from "../action/actionCARD";
import {initCard, SET_CARD_POSITION,SET_CARD_CLOSED, SET_CARD_NAME, SET_CARD_LIST, SET_CARD_SUBSCRIBED }from "../action/actionCard";

const idcard = ( state = initCard.idcard, action ) => state
const name = ( state = initCard.name, action ) => {
  switch(action["type"]) {
    case SET_CARD_NAME:
      return action.payload.name
    default:
      return state;
  }
}
const closed = ( state = initCard.closed, action ) => {
  switch(action["type"]) {
    case SET_CARD_CLOSED:
      return action.payload.closed
    default:
      return state;
  }
}
const idlist = ( state = initCard.idlist, action ) => {
  switch(action["type"]) {
    case SET_CARD_LIST:
      return action.payload.idlist
    default:
      return state;
  }
}
const pos = ( state = initCard.pos, action ) => {
  switch(action["type"]) {
    case SET_CARD_POSITION:
      return action.payload.pos
    default:
      return state;
  }
}
const subscribed = ( state = initCard.subscribed, action ) => {
  switch(action["type"]) {
  case SET_CARD_SUBSCRIBED:
    return action.payload.subscribed
  default:
    return state;
  }  
}

const toggle = ( state = [], action ) => {
  switch(action["type"]) {
  case "TOGGLE_CLOSE":
    return action.payload;
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
  idcard ,
  name,
  closed,
  idlist,
  pos ,
  subscribed,
  toggle
  })
 