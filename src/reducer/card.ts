// Modules
import { combineReducers } from 'redux';

// Definitions
import { initCard } from '../type';
import { SET_CARD_NAME, SetCardNameAction } from '../actionType';

const name = (state: String = initCard.name, action:SetCardNameAction) => action.type === SET_CARD_NAME ? action.payload.name : state;

// Main Reducer
export default combineReducers({
  name
})
