// Modules
import { Action } from 'redux';

// Action definition

export const SET_CARD_NAME = "@@card/SET_CARD_NAME";
export interface SetCardNameAction extends Action {
  type: "@@card/SET_CARD_NAME",
  payload: {
    name: String
  }
}
