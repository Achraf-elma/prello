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
export const SET_CHECK_ITEM_STATE = "@@checkitem/SET_CHECK_ITEM_STATE"

// Action builders
export const setCheckItemState = (id, newCompleted) => ({
  type: SET_CHECK_ITEM_STATE,
  payload:  {
    id,
    completed: newCompleted,
  }
})