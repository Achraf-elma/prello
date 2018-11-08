// default state
export const initCheckItem = {
  id: 'string',
  idChecklist: 'string',
  name: 'string',
  completed: false,
  pos: 0,
  nameData: 'string',
}

// Action type constants
export const SET_CHECK_ITEM_COMPLETED = "@@checkitem/SET_CHECK_ITEM_COMPLETED"

// Action builders
export const setCheckItemCompleted = (id, newCompleted) => ({
  type: SET_CHECK_ITEM_COMPLETED,
  payload:  {
    id,
    completed: newCompleted,
  }
})