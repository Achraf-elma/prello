// Modules
import { combineReducers } from 'redux';

// Action types
import {initBoards, CLOSE_BOARD_FROM_BOARDS, SELECT_BOARD, ADD_BOARD_TO_BOARDS, UPDATE_BOARD } from '../action/actionBoardList';
import {SET_BOARD_CLOSE} from '../action/actionBoard';
import board from './board';


export default ( state = initBoards.boards, action) => {
  switch(action.type) {
    case ADD_BOARD_TO_BOARDS:
      return [...state, action.payload]
    case UPDATE_BOARD:
        let boardToUpdate = state[action.payload];
        let boards = state.filter((board, index) => index !== action.payload.idBoardToRemove);
        return [...boards, boardToUpdate]
    case SET_BOARD_CLOSE:
        console.log("before: ", state)
        let boardToClose = state.find(board => board.id = action.payload.id)
        let indexOfBoardToClose = state.indexOf(boardToClose)
        let boardClosed = board(boardToClose, action)
        var nextBoards = [...state]
        nextBoards.splice(indexOfBoardToClose, 1, boardClosed)

        //let newState = state.filter(id => id !== action.payload.idBoardToRemove)
        console.log("after: " , nextBoards)
        return nextBoards
    default:
      return state;
  }
}

