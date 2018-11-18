// Modules
import {ObjectId} from 'bson';

//Default State
export const initCheckList = {
    id: null,
    name: "testName",
    idBoard: null,
    idCard: null,
    pos: 0,
    checklistItems: []
  }

// Action type constants
export const ADD_NEW_CHECKLIST_ITEM = "@@checklist/ADD_NEW_CHECKLIST_ITEM"
export const DELETE_CHECKLIST_ITEM = "@@checklist/DELETE_CHECKLIST_ITEM"
export const SET_CHECKS = "@@checklist/SET_CHECKS"
export const ADD_CHECK_LIST = "@@checklist/ADD_CHECK_LIST,"

export const addCheckListToBoard = (idBoard, idCard, name) => ({
    type: ADD_CHECK_LIST,
    payload: {
      id : new ObjectId(),
      idBoard: idBoard,
      idCard: idCard,
      name: name || "my list"
    }
  })

// Action Builders
export const addNewChecklistItem = (id, newItem) => ({
    type: ADD_NEW_CHECKLIST_ITEM,
    payload: {
        id, 
        newItem
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
  
  