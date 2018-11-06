// Action types
import { MOVE_CARD_IN_LIST, ADD_CARD_IN_LIST } from '../action/actionList';
import { SET_CARD_DUE_DATE } from '../action/actionCard';


export default ( state = [], action) => {
  switch(action.type) {
    case ADD_CARD_IN_LIST:
  // let lists = state.filter(card => card.idlist == action.payload.cardToMovePos);
    return [...state, action.payload];
    case SET_CARD_DUE_DATE:
    console.log("SET CARD DUE DATE");
    const currentCards = state;
    console.log("CurrentCards " + currentCards);
    console.log("Id to modify:" + action.payload.id);
    console.log("New due Date:" + action.payload.dueDate);

    const cardToUpdate = currentCards.find(card => card.id === action.payload.id)
    const idx = currentCards.indexOf(cardToUpdate)
    console.log(cardToUpdate);
    cardToUpdate.dueDate = action.payload.end;
    cardToUpdate.start = action.payload.start;
    cardToUpdate.allDay = action.payload.allDay;
    cardToUpdate.end = action.payload.end;
    console.log(cardToUpdate)
    const nextCards = [...currentCards]
    nextCards.splice(idx, 1, cardToUpdate)
     console.log(nextCards);
     return  nextCards;

    case MOVE_CARD_IN_LIST:
      let cardToMove = state[action.payload.cardToMovePos];
      let cards = state.filter((card, index) => index !== action.payload.cardToMovePos);
      return [
        ...cards.slice(0, action.payload.newCardPos),
        cardToMove,
        ...cards.slice(action.payload.newCardPos)
      ];
    default:
      return state;
  }
}
