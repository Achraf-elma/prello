// Action types
import {  ADD_LABEL_TO_CARD , SET_LABELS} from '../action/actionLabel';



export default ( state = [], action) => {
  switch(action.type) {
    case SET_LABELS:
      return action.payload.map(labelNames => ({
        id : labelNames._id , 
        ...labelNames
      }))
    case ADD_LABEL_TO_CARD:
      return [...state, action.payload];
    default:
      return state;
  }
}
