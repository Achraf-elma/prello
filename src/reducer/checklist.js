// Modules
import { combineReducers } from 'redux';

// Definitions
import { initCheckList, ADD_NEW_CHECKLIST_ITEM, DELETE_CHECKLIST_ITEM, SET_CHECKS } from "../action/actionChecklist";

const id = ( state = initCheckList.id, action ) => state
const checklistItems = (state = initCheckList.checklistItems, action ) => {
  switch(action["type"]) {
    case SET_CHECKS:
    case ADD_NEW_CHECKLIST_ITEM:
      return [ ...state, action.payload.newItem]
    case DELETE_CHECKLIST_ITEM:
      return state.filter(id => id !== action.payload.itemToDelete)
    default:
      return state;
  }
}

const idBoard = ( state = initCheckList.idBoard, action ) => state
const idCard = ( state = initCheckList.idCard, action ) => state
const pos = ( state = initCheckList.pos, action ) => state
const name = ( state = initCheckList.name, action ) => state

// Main Reducer
export default combineReducers({
  id,
  checklistItems,
  idBoard,
  idCard,
  name,
  pos
})
