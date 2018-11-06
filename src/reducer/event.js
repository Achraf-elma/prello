// Action types
import { ADD_CARD_IN_CALENDAR } from '../action/actionList';


export default ( state = [], action) => {
  switch(action.type) {
    case ADD_CARD_IN_CALENDAR:
     console.log(state);
  // let lists = state.filter(card => card.idlist == action.payload.cardToMovePos);
    return [...state, action.payload];
    default:
      return state;
  }
}
