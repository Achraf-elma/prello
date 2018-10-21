// Modules
import { combineReducers } from 'redux';

// Definitions
// Definitions
import { initCard,  SET_CARD_NAME, SET_CHECK_CARD_STATE, CHANGE_CARD_DESC } from "../action/actionCard";


// TODO: action type constants
const id = ( state = initCard.id, action ) => state
const name = ( state = initCard.name, action ) => {
  switch(action["type"]) {
    case SET_CARD_NAME:
      return action.payload.name
    default:
      return state;
  }
}
const idBoard = ( state = initCard.idBoard, action ) => state
const idList = ( state = initCard.idList, action ) => state
const dueDate = ( state = initCard.dueDate, action ) => state

const done = (state = initCard.done, action ) => {
  switch(action["type"]) {
    case SET_CHECK_CARD_STATE:
      return action.payload.state
    default:
      return state;
  }
}


// Main Reducer
export default combineReducers({
  id,
  name,
  idBoard,
  idList,
  dueDate,
  done
});

