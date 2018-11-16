// Modules
import { combineReducers } from 'redux';

// Definitions
// TODO: import type, action type & type constants
//import {initCard, SET_CARD_POSITION,SET_CARD_CLOSED, setCARDClosed, setCARDPosition, SET_CARD_NAME, SET_CARD_LIST, SET_CARD_SUBSCRIBED }from "../action/actionCARD";
import {initCard, SET_CARD_POSITION,ASSIGN_CHECKLIST_TO_CARD, ASSIGN_LABEL_TO_CARD, SET_CARD_DESC,SET_CARD_CLOSED, SET_CARD_NAME, SET_CARD_LIST, SET_CARD_DUE_DATE, ASSIGN_MEMBER_TO_CARD }from "../action/actionCard";

const id = ( state = initCard.id, action ) => state


const name = ( state = initCard.name, action ) => {
  switch(action["type"]) {
    
    case SET_CARD_NAME:
      return action.payload.name
    default:
      return state;
  }
}

const desc = ( state = initCard.desc, action ) => {
  switch(action["type"]) {
    case SET_CARD_DESC:
      return action.payload.desc
    default:
      return state;
  }
}


const dueDate = ( state = initCard.dueDate, action ) => {
  switch(action["type"]) {
    case SET_CARD_DUE_DATE:
      return action.payload.dueDate
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

const closed = ( state = initCard.closed, action ) => {
  switch(action["type"]) {
    case SET_CARD_CLOSED:
      return action.payload.closed
    default:
      return state;
  }
}
const idList = ( state = initCard.idList, action ) => {
  switch(action["type"]) {
    case SET_CARD_LIST:
      return action.payload.idList
    default:
      return state;
  }
}

const idLabels = ( state = initCard.idLabels, action ) => {
  switch(action["type"]) {
    case ASSIGN_LABEL_TO_CARD:
       return [...state, action.payload.idLabel];
    default:
      return state;
  }
}

const idChecklists = ( state = initCard.idChecklists, action ) => {
  switch(action["type"]) {
    case ASSIGN_CHECKLIST_TO_CARD:
       return [...state, action.payload.idCheckList];
    default:
      return state;
  }
}
const idMembers = ( state = initCard.idMembers, action ) => {
  switch(action["type"]) {
    case ASSIGN_MEMBER_TO_CARD:
       return [...state, action.payload.idMember];
    default:
      return state;
  }
}


// Reducer
export default combineReducers({
  id ,
  name,
  desc,
  dueDate,
  pos ,
  closed,
  idList, 
  idMembers,
  idLabels,
  idChecklists
  })
 