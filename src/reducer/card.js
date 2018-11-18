// Modules
import { combineReducers } from 'redux';

// Definitions
// TODO: import type, action type & type constants
//import {initCard, SET_CARD_POSITION,SET_CARD_CLOSED, setCARDClosed, setCARDPosition, SET_CARD_NAME, SET_CARD_LIST, SET_CARD_SUBSCRIBED }from "../action/actionCARD";
import {initCard, SET_CARD_POSITION,ASSIGN_CHECKLIST_TO_CARD,  SET_CARD_DESC,SET_CARD_CLOSED, SET_CARD_NAME, SET_CARD_LIST, SET_CARD_DUE_DATE, ASSIGN_MEMBER_TO_CARD, SET_CARD_DUE_COMPLETE, SET_CARD_ALL_DAY }from "../action/actionCard";

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

const allDay = ( state = initCard.allDay, action ) => {
  switch(action["type"]) {
    case SET_CARD_ALL_DAY:
      return action.payload.allDay
    default:
      return state;
  }
}

const dueComplete = ( state = initCard.dueComplete, action ) => {
  switch(action["type"]) {
    case SET_CARD_DUE_COMPLETE:
      return action.payload.dueComplete
    default:
      return state;
  }
}

const position = ( state = initCard.position, action ) => {
  switch(action["type"]) {
    case SET_CARD_POSITION:
      return action.payload.position
    default:
      return state;
  }
}

const isClosed = ( state = initCard.isClosed, action ) => {
  switch(action["type"]) {
    case SET_CARD_CLOSED:
    console.log(action)
      return action.payload.isClosed
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
  allDay,
  dueComplete,
  position ,
  isClosed,
  idList, 
  idMembers,
  idChecklists
  })
 