// Modules

// Action type constants
export const SET_LISTS = "@@lists/SET_LISTS";

export const setLists = (lists) => ({
  socketAction: true,
  type: SET_LISTS,
  payload: lists
})


