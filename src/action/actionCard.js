// Modules

// Action type constants
// TODO: Action type constant
// default state
export const initCard = {
    id: 'string',
    idBoard: 'string',
    idList: 'string',
    dueDate: "Date",
    done: 'doing' | 'done',
    desc: 'MyCard'
  }
  
  // Action type constants
  export const SET_CHECK_CARD_STATE = "@@card/SET_CHECK_CARD_STATE"
  export const CHANGE_CARD_DESC = "CHANGE_CARD_DESC"

  // Action builders
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
