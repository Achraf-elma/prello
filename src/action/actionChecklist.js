// Modules
import {ObjectId} from 'bson';

//Default State
export const initCheckList = {
    id: null,
    name: "my check list",
    idCard: null,
    checklistItems: [{}]
  }

// Action type constants
export const ADD_CHECKLIST_ITEM = "@@checklist/ADD_CHECKLIST_ITEM"
export const DELETE_CHECKLIST_ITEM = "@@checklist/DELETE_CHECKLIST_ITEM"
export const SET_CHECKS = "@@checklist/SET_CHECKS"
export const ADD_CHECK_LIST = "@@checklist/ADD_CHECK_LIST,"

export const addCheckListToBoard = (idCard, name) => ({
    type: ADD_CHECK_LIST,
    payload: {
      id : new ObjectId(),
      idCard: idCard,
      name: name || "my list",
      checklistItems: [{}]
    }
  })

// Action Builders
export const addNewChecklistItem = (id, newItem) => ({
    type: ADD_CHECKLIST_ITEM,
    payload: {
        id : id, 
        newItem : {
          id : new ObjectId(),
          name : newItem,
          completed : false
        }
    }
}) 

export const deleteChecklistItem = (id, itemToDelete) => ({
    type: DELETE_CHECKLIST_ITEM,
    payload: {
        id, 
        itemToDelete
    }
}) 

export const setCheckLists = (checks) => ({
    socketAction: true,
    type: SET_CHECKS,
    payload: checks
  })


  