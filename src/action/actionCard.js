// Modules

// default state
export const initCard = {
  id : 0 , //TODO check
  name: 'My card',
  desc: null,
  dueDate : '01/10/2018',
  dueComplete : false,
  allDay : false,
  position : null,
  isClosed: false,
  idList : null,
  idBoard : null,
  idMembers : [{}],
  idLabels : [],
  idChecklists : []
  }
  
  // Action type constants
 // export const SET_CARD_ID = "@@card/SET_CARD_ID";
  export const SET_CARD_NAME = "@@card/SET_CARD_NAME";
  export const SET_CARD_DESC = "@@card/SET_CARD_DESC";
  export const SET_CARD_DUE_DATE = "@@card/SET_CARD_DUE_DATE"
  export const SET_CARD_ALL_DAY = "@@card/SET_CARD_ALL_DAY"
  export const SET_CARD_DUE_COMPLETE = "@@card/SET_CARD_DUE_COMPLETE"
  export const SET_CARD_POSITION = "@@card/SET_CARD_POSITION"
  export const SET_CARD_CLOSED = "@@card/SET_CARD_CLOSED"
  export const SET_CARD_LIST = "@@card/SET_CARD_LIST"
  export const SET_CARD_BOARD = "@@card/SET_CARD_BOARD"
  export const ASSIGN_MEMBER_TO_CARD = "@@card/ASSIGN_MEMBER_TO_CARD ";
  export const ASSIGN_CHECKLIST_TO_CARD = "@@card/ASSIGN_CHECKLIST_TO_CARD ";

  export const SET_NEW_CARD = "@@card/SET_NEW_CARD";

  export const setCardName = (id, newName) => ({
    type: SET_CARD_NAME,
    payload:  {
      id : id,
      name : newName
    }
  })

  export const setCardDesc = (id, newDesc) => ({
    type: SET_CARD_DESC,
    payload:  {
      id : id,
      desc : newDesc
    }
  })

  export const setCardDueDate = (id, newDueDate) => ({
    type: SET_CARD_DUE_DATE,
    payload:  {
      id: id,
      dueDate : newDueDate
    }
  })

  export const setCardAllDay= (id, newAllday) => ({
    type: SET_CARD_ALL_DAY,
    payload:  {
      id: id,
      allDay : newAllday
    }
  })

  export const setCardDueComplete = (id, newCompleted) => ({
    type: SET_CARD_DUE_COMPLETE,
    payload:  {
      id: id,
      dueComplete : newCompleted
    }
  })


  export const setCardPosition = (id, newPos) => ({
    type: SET_CARD_POSITION,
    payload:  {
      id : id,
      position : newPos
    }
  })

  export const setCardClosed = (id, newClosed) => ({
    type: SET_CARD_CLOSED,
    payload:  {
      id: id,
      isClosed : newClosed
    }
  })

  export const setCardList = (id, newIdList) => ({
    type: SET_CARD_LIST,
    payload:  {
      id : id,
      idList : newIdList
    }
  })

  export const setCardBoard = (id, newIdBoard) => ({
    type: SET_CARD_LIST,
    payload:  {
      id : id,
      idBoard : newIdBoard
    }
  })


  export const assignMemberToCard = (idCard, idMember) => ({
    type: ASSIGN_MEMBER_TO_CARD,
    payload: {
      id: idCard,
      idMember: idMember  
    }
  })
  
  export const assignChecklistToCard = (idCard, idChecklist) => ({
    type: ASSIGN_CHECKLIST_TO_CARD,
    payload: {
      id: idCard,
      idChecklist: idChecklist  
    }
  })
  
