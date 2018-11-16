// Modules
// import { combineReducers } from 'redux';

// Action types
import {initBoards, ADD_BOARD_TO_BOARDS, UPDATE_BOARD, SET_BOARD_LIST } from '../action/actionBoardList';
import {SET_BOARD_CLOSE, ADD_SET_LABEL_TO_BOARD} from '../action/actionBoard';
import board from './board';


export default ( state = initBoards.boards, action) => {
  switch(action.type) {
    case SET_BOARD_LIST:
      return action.payload;
    case ADD_SET_LABEL_TO_BOARD:
      var idxBoardToUpdate = state.findIndex(board => board.id === action.payload.id)
      var boardUptaded = board(state[idxBoardToUpdate], action)
      var nextBoards = [...state]
      nextBoards[idxBoardToUpdate] = boardUptaded;
      return  nextBoards;

    case ADD_BOARD_TO_BOARDS:
      let boards = [...state, action.payload];
      return boards
    case UPDATE_BOARD:
        let boardToUpdate = state[action.payload];
        let boards2 = state.filter((board, index) => index !== action.payload.idBoardToRemove);
        return [...boards2, boardToUpdate];
    case SET_BOARD_CLOSE:
        let boardIndex = state.findIndex(board => board.id === action.payload.id);
        let boardClosed = board(state[boardIndex], action)
        var nextBoards = [...state]
        nextBoards[boardIndex] = boardClosed;
        return nextBoards;
    default:
      return state;
  }
}

