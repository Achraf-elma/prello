// Action types
import { MOVE_CARD_IN_LIST, ADD_CARD_IN_LIST } from '../action/actionList';
import { SET_CARD_DUE_DATE, SET_CARD_NAME, ASSIGN_LABEL_TO_CARD, ASSIGN_CHECKLIST_TO_CARD, SET_CARD_DESC, ASSIGN_MEMBER_TO_CARD, SET_CARD_CLOSED} from '../action/actionCard';

import card from './card'
import { SET_CARDS } from '../action/actionCards';


export default ( state = [], action) => {
  switch(action.type) {
    case SET_CARDS:
      return action.payload;
    case ADD_CARD_IN_LIST:
      return [...state, action.payload];
      
    case SET_CARD_NAME:
    case SET_CARD_CLOSED:
    case SET_CARD_DUE_DATE:
    case SET_CARD_DESC:
    case ASSIGN_MEMBER_TO_CARD:
    case ASSIGN_LABEL_TO_CARD:
    case ASSIGN_CHECKLIST_TO_CARD:
      var idxCardToUpdate = state.findIndex(card => card.id === action.payload.id)
      var cardUptaded = card(state[idxCardToUpdate], action)
      var nextCards = [...state]
      nextCards[idxCardToUpdate] = cardUptaded;
      return  nextCards;

    case MOVE_CARD_IN_LIST:
      let cardToMove = state[action.payload.cardToMovePos];
      let cards = state.filter((card, index) => index !== action.payload.cardToMovePos);
      let posPrevCard = cards[action.payload.newCardPos].pos;
      let posNextCard = cards[action.payload.newCardPos+1].pos;
      return [
        ...cards.slice(0, action.payload.newCardPos),
        {...cardToMove, pos: (posPrevCard + posNextCard)/2 },
        ...cards.slice(action.payload.newCardPos)
      ];
    default:
      return state;
  }
}
