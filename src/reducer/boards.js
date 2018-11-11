// Modules
import { combineReducers } from 'redux';

// Action types
import {initBoards, CLOSE_BOARD_FROM_BOARDS, SELECT_BOARD, ADD_BOARD_TO_BOARDS, UPDATE_BOARD } from '../action/actionBoardList';
import {SET_BOARD_CLOSE, ADD_SET_LABEL_TO_BOARD} from '../action/actionBoard';
import board from './board';


export default ( state = initBoards.boards, action) => {
  switch(action.type) {

    case ADD_SET_LABEL_TO_BOARD:
      var idxBoardToUpdate = state.findIndex(board => board.id === action.payload.id)
      var boardUptaded = board(state[idxBoardToUpdate], action)
      var nextBoards = [...state]
      nextBoards[idxBoardToUpdate] = boardUptaded;
      return  nextBoards;

    case ADD_BOARD_TO_BOARDS:
      console.log("reducer add_board_to_boards",action.payload)
      let boards = [...state, action.payload]
      console.log("add board to boards", boards)
      return boards
    case UPDATE_BOARD:
        console.log("Update board");
        let boardToUpdate = state[action.payload];
        let boards2 = state.filter((board, index) => index !== action.payload.idBoardToRemove);
        console.log("After Update board boards", boards2);
        return [...boards2, boardToUpdate]
    case SET_BOARD_CLOSE:
        let boardIndex = state.findIndex(board => board.id === action.payload.id);
        let boardClosed = board(state[boardIndex], action)
        var nextBoards = [...state]
      nextBoards[boardIndex] = boardClosed;
        return nextBoards


        /*
        let boardToClose = state.find(board => board.id = action.payload.id)
        console.log("booooooard", boardToClose)
        let indexOfBoardToClose = state.indexOf(boardToClose)
        let boardClosed = board(boardToClose, action)
        var nextBoards = [...state]
        nextBoards.splice(indexOfBoardToClose, 1, boardClosed)
        */ 
        //let newState = state.filter(id => id !== action.payload.idBoardToRemove)
        //return nextBoards
    default:
      console.log("default: --- ", state)
      return state;
  }
}

