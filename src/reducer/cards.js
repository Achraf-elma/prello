// Action types
import { MOVE_CARD_IN_LIST, ADD_CARD_IN_LIST } from '../action/actionList';
import { SET_CARD_DUE_DATE, SET_CARD_NAME } from '../action/actionCard';

import card from './card'
export default ( state = [], action) => {


  switch(action.type) {
  
    case ADD_CARD_IN_LIST:
      return [...state, action.payload];

    case SET_CARD_DUE_DATE:
      var cardToUpdate = state.find(card => card.id === action.payload.id)
      var idx = state.indexOf(cardToUpdate)
      var cardUptaded = card(cardToUpdate, action)
      var nextCards = [...state]
      nextCards.splice(idx, 1, cardUptaded)
      return  nextCards;

    case SET_CARD_NAME:
      var cardToUpdate = state.find(card => card.id === action.payload.id)
      var idx = state.indexOf(cardToUpdate)
      var cardUptaded = card(cardToUpdate, action)
      var nextCards = [...state]
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
