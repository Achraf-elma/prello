// Modules
import uuidv4 from "uuidv4";
import moment from "moment";
import {ObjectId} from 'bson';
// default state
export const initCOMMENT = {
  id : null ,
  date : Date, 
  text: null,
  idCard: null,
  idMember : null,
  pos : null,
  isClosed: null
  }
  
  // Action type constants

 export const SET_COMMENT_DATE = "@@COMMENT/SET_COMMENT_DATE";
 export const SET_COMMENT_TEXT = "@@COMMENT/SET_COMMENT_TEXT";
 export const SET_COMMENT_CARD = "@@COMMENT/SET_COMMENT_CARD";
 export const SET_COMMENT_MEMBER = "@@COMMENT/SET_COMMENT_MEMBER"
 export const SET_COMMENT_POSITION = "@@COMMENT/SET_COMMENT_POSITION"
 export const SET_COMMENT_CLOSED = "@@COMMENT/SET_COMMENT_CLOSED"
 export const ADD_COMMENT_TO_CARD =  "@@COMMENT/ADD_COMMENT_TO_CARD"
 export const SET_COMMENTS= "@@comment/SET_COMMENTS";

  export const SET_NEW_COMMENT= "@@COMMENT/SET_NEW_COMMENT"


  export const setCommentDate= (id, newDate) => ({
    type: SET_COMMENT_DATE,
    payload:  {
      id : id,
      date : newDate
    }
  })

  export const setCommentText= (id, newText) => ({
    type:  SET_COMMENT_TEXT,
    payload:  {
      id : id,
      text : newText
    }
  })

  export const setCommentCard = (id, newIdCard) => ({
    type: SET_COMMENT_CARD,
    payload:  {
      id : id,
      idCard : newIdCard
    }
  })



  export const setCommentMember = (id, newMember) => ({
    type:  SET_COMMENT_MEMBER ,
    payload:  {
      id: id,
      member : newMember
    }
  })

  export const setCommentPosition = (id, newPos) => ({
    type: SET_COMMENT_POSITION,
    payload:  {
      id : id,
      pos : newPos
    }
  })

  export const setCommentClosed = (id, newClosed) => ({
    type: SET_COMMENT_CLOSED,
    payload:  {
      id: id,
      isClosed : newClosed
    }
  })

// Add a new card at the end of the list
export const addCommentToCard = (idCard, idMember, text) => ({
  type: ADD_COMMENT_TO_CARD,
  payload: {
    id : new  ObjectId(),
    idCard: idCard,
    idMember: idMember,
    date : moment(),
    text: text,   
  }
})

  


export const setComments = (comments) => ({
  socketAction: true,
  type: SET_COMMENTS,
  payload: comments
})

