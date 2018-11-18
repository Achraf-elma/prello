// Action types
import { ADD_CHECK_LIST, ADD_CHECKLIST_ITEM } from '../action/actionChecklist';
import {SET_CHECK_ITEM_COMPLETED } from "../action/actionCheckItem";

import checklist from './checklist';

export default ( state = [], action) => {
  switch(action.type) {
    case ADD_CHECK_LIST:
      return [...state, action.payload];
     
    case SET_CHECK_ITEM_COMPLETED:
    var idxCheckToUpdate = state.findIndex(Check => Check.id === action.payload.idChecklist)
      var CheckUptaded = checklist(state[idxCheckToUpdate], action)
      var nextChecks = [...state]
      nextChecks[idxCheckToUpdate] = CheckUptaded;
      console.log("CHECKLISTS: " + nextChecks);
      return  nextChecks;
      case ADD_CHECKLIST_ITEM:
      var idxCheckToUpdate = state.findIndex(Check => Check.id === action.payload.id)
      var CheckUptaded = checklist(state[idxCheckToUpdate], action)
      var nextChecks = [...state]
      nextChecks[idxCheckToUpdate] = CheckUptaded;
      console.log("CHECKLISTS: " + nextChecks);
      return  nextChecks;
       

    default:
      return state;
  }
}
