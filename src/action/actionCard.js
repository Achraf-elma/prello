// Modules

// Action type constants
// TODO: Action type constant
// default state
export const initCard = {
  id : 0 , //TODO check
  name: 'My card',
  closed: 'closed'|'notClosed', 
  idBoard: ' ', //TODO check
  pos : 0,
  subscribed : 'subscribed'|'notSubscribed', 
  }
  
  // Action type constants
  export const SET_CARD_CLOSED = "@@card/SET_CARD_CLOSED"
export const SET_CARD_POSITION = "@@card/SET_CARD_POSITION"
export const SET_CARD_SUBSCRIBED = "@@card/SET_CARD_SUBSCRIBED "

export const SET_CARD_LIST = "@@card/SET_CARD_LIST"
export const SET_NEW_CARD= "@@card/SET_NEW_CARD"
  export const SET_CHECK_CARD_STATE = "@@card/SET_CHECK_CARD_STATE"
  export const SET_CARD_NAME = "@@card/SET_CARD_NAME"
  export const CHANGE_CARD_DESC = "CHANGE_CARD_DESC"


  export const setCardName= (id, name) => ({
    type: SET_CARD_NAME,
    payload:  {
      id,
      name
    }
  })

  export const setCardClosed = (id, closed) => ({
    type: SET_CARD_CLOSED,
    payload:  {
      id,
      closed
    }
  })


export const setCardPosition = (id, pos) => ({
  type: SET_CARD_POSITION,
  payload:  {
    id,
    pos
  }
})

export const setCardSubscribed = (id, subscribed) => ({
  type: SET_CARD_SUBSCRIBED,
  payload:  {
    id,
    subscribed
  }
})

export const setCardList = (id, idBoard) => ({
  type: SET_CARD_LIST,
  payload:  {
    id,
    idBoard
  }
})

export const createCard = (id, name , closed,  idBoard, pos , subscribed ) => ({
  type: SET_NEW_CARD,
  payload:  {
    id,
    name ,
    closed,
    idBoard,
    pos ,
    subscribed   }
})
  export const setCheckCardState = (id, done) => ({
    type: SET_CHECK_CARD_STATE,
    payload:  {
      id,
      state: done ? "doing" : "done",
    }
  })

   // Action builders
   export const changeCardDesc = (id, newDesc) => ({
    type: CHANGE_CARD_DESC,
    payload:  {
      id,
      desc: newDesc,
    }
  })
