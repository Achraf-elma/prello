// Action types
import {  ADD_LABEL_IN_CARD } from '../action/actionLabel';



export default ( state = [], action) => {
  switch(action.type) {
    case ADD_LABEL_IN_CARD:
      return [...state, action.payload];
    default:
      return state;
  }
}
