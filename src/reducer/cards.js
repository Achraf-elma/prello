// Action types
import { MOVE_CARD_IN_LIST, ADD_CARD_IN_LIST } from '../action/actionList';
import { SET_CARD_DUE_DATE } from '../action/actionCard';

import card from './card'
export default ( state = [], action) => {
  switch(action.type) {
    case ADD_CARD_IN_LIST:
    return [...state, action.payload];
    case SET_CARD_DUE_DATE:
    let cardToUpdate = state.find(card => card.id === action.payload.id)
    let idx = state.indexOf(cardToUpdate)
    let cardUptaded = card(cardToUpdate, action)
    let nextCards = [...state]
    nextCards.splice(idx, 1, cardUptaded)
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
