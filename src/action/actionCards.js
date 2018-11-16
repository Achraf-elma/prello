// Modules

// Action type constants
export const SET_CARDS = "@@lists/SET_CARDS";


export const setCards = (cards) => ({
  socketAction: true,
  type: SET_CARDS,
  payload: cards
})
