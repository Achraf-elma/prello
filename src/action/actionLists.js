// Modules
import uuidv4 from "uuidv4";



  // Action type constants
 // export const SET_CARD_ID = "@@card/SET_CARD_ID";
  export const SET_LISTS = "@@lists/SET_LISTS";



  export const setLists = (lists) => ({
    type: SET_LISTS,
    payload: lists
    
  })
  

