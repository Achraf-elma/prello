// Action types
import { ADD_CHECK_LIST } from '../action/actionChecklist';



export default ( state = [], action) => {
  switch(action.type) {
    case ADD_CHECK_LIST:
      return [...state, action.payload];
    default:
      return state;
  }
}
