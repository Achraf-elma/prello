// default state
export const initCheckItem = {
  id: null,
  idChecklist: null,
  name: null,
  completed: false,
}

// Action type constants
export const SET_CHECK_ITEM_COMPLETED = "@@checkitem/SET_CHECK_ITEM_COMPLETED";

// Action builders
export const setCheckItemCompleted = (id, idChecklist,newCompleted, newName) => ({
  type: SET_CHECK_ITEM_COMPLETED,
  payload:  {
    id : id,
    idChecklist : idChecklist,
    completed: newCompleted,
    name : newName
  }
})