// Modules
import uuidv4 from "uuidv4";
import moment from "moment";
// default state
export const initCOMMENT = {
  id : null ,
  fullName : Date, 
  username: null,
  email: null
  }
  
  // Action type constants

 export const SET_MEMBER_FULLNAME = "@@MEMBER/SET_MEMBER_FULLNAME";
 export const SET_MEMBER_EMAIL = "@@MEMBER/SET_MEMBER_EMAIL";

 export const ADD_MEMBER_IN_CARD= "@@MEMBER/ADD_MEMBER_IN_CARD";
 export const ASSIGN_MEMBER_TO_CARD = "@@MEMBER/ASSIGN_MEMBER_TO_CARD ";





  export const setMemberFullname= (id, newName) => ({
    type: SET_MEMBER_FULLNAME,
    payload:  {
      id : id,
      fullName : newName
    }
  })

  export const setCommentText= (id, newEmail) => ({
    type:  SET_MEMBER_EMAIL,
    payload:  {
      id : id,
      text : newEmail
    }
  })


// 
export const assignMemberToCard = (idCard, idMember) => ({
  type: ASSIGN_MEMBER_TO_CARD,
  payload: {
    idCard: idCard,
    idMember: idMember  
  }
})

  

