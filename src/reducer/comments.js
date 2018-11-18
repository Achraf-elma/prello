// Action types
import {  ADD_COMMENT_TO_CARD, SET_COMMENTS } from '../action/actionComment';



export default ( state = [], action) => {
  switch(action.type) {
    case ADD_COMMENT_TO_CARD:
      return [...state, action.payload];
    
     case SET_COMMENTS:
     return action.payload;
    
    default:
      return state;
  }
}
