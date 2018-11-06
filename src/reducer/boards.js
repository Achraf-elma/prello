// Modules
import { combineReducers } from 'redux';

// Action types
import {initBoards, REMOVE_BOARD_FROM_BOARDS, SELECT_BOARD, ADD_BOARD_TO_BOARDS, UPDATE_BOARD } from '../action/actionHome';


const boards = ( state = initBoards.boards, action) => {
  switch(action.type) {
    case ADD_BOARD_TO_BOARDS:
      return [...state, action.payload]
    case UPDATE_BOARD:
        let boardToUpdate = state[action.payload];
        let boards = state.filter((board, index) => index !== action.payload.id);
        return [...boards, boardToUpdate]
    case REMOVE_BOARD_FROM_BOARDS:
        return state.filter(id => id !== action.payload.boardIdToRemove)
    default:
      return state;
  }
}
export default combineReducers({
    boards,
  })
