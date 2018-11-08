// Modules
import { combineReducers } from 'redux';

// Definitions
import { initCheckItem, SET_CHECK_ITEM_COMPLETED } from "../action/actionCheckItem";

const id = ( state = initCheckItem.id, action ) => state
const idChecklist = ( state = initCheckItem.idChecklist, action ) => state
const completed = (state = initCheckItem.completed, action ) => {
  switch(action["type"]) {
    case SET_CHECK_ITEM_COMPLETED:
      return action.payload.completed
    default:
      return state;
  }
}
const pos = ( state = initCheckItem.pos, action ) => state
const name = ( state = initCheckItem.name, action ) => state
const nameData = (state = initCheckItem.nameData, action ) => state

// Main Reducer
export default combineReducers({
  id,
  idChecklist,
  completed,
  pos,
  name,
  nameData,
});
