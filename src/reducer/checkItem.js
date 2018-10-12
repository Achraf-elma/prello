// Modules
import { combineReducers } from 'redux';

// Definitions
import { initCheckItem, SET_CHECK_ITEM_STATE } from "../action/actionCheckItem";

const id = ( state = initCheckItem.id, action ) => state
const idChecklist = ( state = initCheckItem.idChecklist, action ) => state
const state = (state = initCheckItem.state, action ) => {
  switch(action["type"]) {
    case SET_CHECK_ITEM_STATE:
      return action.payload.state
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
  state,
  pos,
  name,
  nameData,
});
