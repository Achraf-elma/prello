// Action types
import {  ADD_COMMENT_TO_CARD } from '../action/actionComment';



export default ( state = [], action) => {
  switch(action.type) {
    case ADD_COMMENT_TO_CARD:
      return [...state, action.payload];
    default:
      return state;
  }
}
