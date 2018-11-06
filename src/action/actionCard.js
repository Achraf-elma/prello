// Modules
import uuidv4 from "uuidv4";
// Action type constants
// TODO: Action type constant
// default state
export const initCard = {
  idcard : 0 , //TODO check
  name: 'My card',
  dueDate : null,
  closed: 'closed'|'notClosed', 
  idlist: ' ',
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


  export const setCardName= (idcard, name) => ({
    type: SET_CARD_NAME,
    payload:  {
      idcard,
      name
    }
  })

  export const setCardClosed = (idcard, closed) => ({
    type: SET_CARD_CLOSED,
    payload:  {
      idcard,
      closed
    }
  })


export const setCardPosition = (idcard, pos) => ({
  type: SET_CARD_POSITION,
  payload:  {
    idcard,
    pos
  }
})

export const setCardSubscribed = (idcard, subscribed) => ({
  type: SET_CARD_SUBSCRIBED,
  payload:  {
    idcard,
    subscribed
  }
})

export const setCardList = (idcard, idlist) => ({
  type: SET_CARD_LIST,
  payload:  {
    idcard,
    idlist
  }
})

export const createCard = ( name , dueDate, closed,  idList, pos , subscribed ) => ({
  type: SET_NEW_CARD,
  payload:  {
    idcard: uuidv4(),
    name : name ,
    dueDate : dueDate,
    closed : closed,
    idlist : idList,
    pos :pos ,
    subscribed :  subscribed   }
})
  export const setCheckCardState = (idcard, done) => ({
    type: SET_CHECK_CARD_STATE,
    payload:  {
      idcard,
      state: done ? "doing" : "done",
    }
  })
