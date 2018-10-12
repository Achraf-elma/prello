// default state
export const initCheckItem = {
  id: 'string',
  idChecklist: 'string',
  name: 'string',
  state: 'incomplete' | 'complete',
  pos: 0,
  nameData: 'string',
}

// Action type constants
export const SET_CHECK_ITEM_STATE = "@@checkitem/SET_CHECK_ITEM_STATE"

// Action builders
export const setCheckItemState = (id, completed) => ({
  type: SET_CHECK_ITEM_STATE,
  payload:  {
    id,
    state: completed ? "complete" : "incomplete",
  }
})