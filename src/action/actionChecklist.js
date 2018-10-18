// Modules

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