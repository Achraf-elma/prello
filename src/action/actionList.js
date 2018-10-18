// Modules

// Action Builders
// TODO: Export Action Builder

//default state 
export const initList = {
id : 0 , //TODO check
name: 'ListNamess',
closed: 'closed'|'notClosed', 
idBoard: ' ', //TODO check
pos : 0,
subscribed : 'subscribed'|'notSubscribed', 
}
 
// Action type constants
export const SET_LIST_CLOSED = "@@list/SET_LIST_CLOSED"
export const SET_LIST_POSITION = "@@list/SET_LIST_POSITION"
export const SET_LIST_SUBSCRIBED = "@@list/SET_LIST_SUBSCRIBED "
export const SET_LIST_NAME = "@@list/SET_LIST_NAME"
export const SET_LIST_BOARD = "@@list/SET_LIST_BOARD"
export const SET_NEW_LIST = "@@list/SET_NEW_LIST"


// Action Builders
// TODO: Export Action Builder

export const setListClosed = (id, closed) => ({
    type: SET_LIST_CLOSED,
    payload:  {
      id,
      closed
    }
  })


export const setListPosition = (id, pos) => ({
  type: SET_LIST_POSITION,
  payload:  {
    id,
    pos
  }
})

export const setListSubscribed = (id, subscribed) => ({
  type: SET_LIST_SUBSCRIBED,
  payload:  {
    id,
    subscribed
  }
})

export const setListName = (id, name) => ({
  type: SET_LIST_NAME,
  payload:  {
    id,
    name
  }
})

export const setListBoard = (id, idBoard) => ({
  type: SET_LIST_BOARD,
  payload:  {
    id,
    idBoard
  }
})

export const createList = (id, name , closed,  idBoard, pos , subscribed ) => ({
  type: SET_NEW_LIST,
  payload:  {
    id,
    name ,
    closed,
    idBoard,
    pos ,
    subscribed   }
})

