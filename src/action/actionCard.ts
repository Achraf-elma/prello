// Modules
import { ActionCreator, Action } from 'redux';

// Types
import {Card} from '../type';
import { SetCardNameAction } from '../actionType';

// Actions constants
export const SET_CARD_NAME = "@@card/SET_CARD_NAME";

export const setCardName:ActionCreator<SetCardNameAction> = (card: Card, newName: String) => ({
  type: "@@card/SET_CARD_NAME",
  payload: {
    name: newName,
  }
})