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
export const ADD_NEW_LIST_ITEM = "@@checklist/ADD_NEW_LIST_ITEM"

// Action Builders
export const addNewListItem = (id, newItem) => ({
    type: ADD_NEW_LIST_ITEM,
    payload: {
        id, 
        newItem
    }
}) 