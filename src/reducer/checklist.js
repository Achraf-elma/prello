// Modules
import { combineReducers } from 'redux';
import checkItem from './checkItem';
// Definitions
import { initCheckList, ADD_CHECKLIST_ITEM, DELETE_CHECKLIST_ITEM, SET_CHECKS } from "../action/actionChecklist";
import { SET_CHECK_ITEM_COMPLETED} from "../action/actionCheckItem";
const id = ( state = initCheckList.id, action ) => state
const checklistItems = (state = initCheckList.checklistItems, action ) => {
  switch(action["type"]) {

    case SET_CHECK_ITEM_COMPLETED:
       var idxItemToUpdate = state.findIndex(item => item.id === action.payload.id)
      var itemUptaded = checkItem(state[idxItemToUpdate], action)
      var nextItems = [...state]
      nextItems[idxItemToUpdate] = itemUptaded;
      console.log("CHECKLIST: " + nextItems);
      return  nextItems;
    case SET_CHECKS:


    case ADD_CHECKLIST_ITEM:
      return [ ...state, action.payload.newItem]
    case DELETE_CHECKLIST_ITEM:
      return state.filter(item => item.id !== action.payload.idItemToDelete)
    default:
      return state;
  }
}

const idCard = ( state = initCheckList.idCard, action ) => state

const name = ( state = initCheckList.name, action ) => state

// Main Reducer
export default combineReducers({
  id,
  checklistItems,
  idCard,
  name
})
