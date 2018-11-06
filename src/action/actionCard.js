// Modules
import uuidv4 from "uuidv4";
// Action type constants
// TODO: Action type constant
// default state
export const initCard = {
  id : 0 , //TODO check
  name: 'My card',
  dueDate : '01/10/2018',
  title: "My card",
  allDay: true,
  start : null,
  end : null,
  closed : null,
  pos : null ,
  subscribed :  null,
  closed: 'closed'|'notClosed', 
  idlist: null
  }
  
  // Action type constants
  export const SET_CARD_DUE_DATE = "@@card/SET_CARD_DUE_DATE"
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

  export const setCardDueDate= (id, newStart, newEnd, newAllDay) => ({
    type: SET_CARD_DUE_DATE,
    payload:  {
      id: id,
      dueDate : newEnd,
      start : newStart,
      end : newEnd,
      allDay : newAllDay
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

export const setCardList = (id, idlist) => ({
  type: SET_CARD_LIST,
  payload:  {
    id,
    idlist
  }
})

export const createCard = ( cardName , dueDate, closed,  idList, pos , subscribed ) => ({
  type: SET_NEW_CARD,
  payload:  {
    id: uuidv4(),
    name: cardName,
    dueDate : dueDate,
    title: cardName,
    allDay: true,
    start : new Date(dueDate),
    end : new Date(dueDate),
    closed : closed,
    idlist : idList,
    pos :pos ,
    subscribed :  subscribed   }
})
  export const setCheckCardState = (id, done) => ({
    type: SET_CHECK_CARD_STATE,
    payload:  {
      id,
      state: done ? "doing" : "done",
    }
  })
