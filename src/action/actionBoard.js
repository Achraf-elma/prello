// Modules
import uuidv4 from "uuidv4";

// Action type constants
// TODO: Action type constant

// Action Builders
// TODO: Export Action Builder

// Move a list position in the board
export const MOVE_LIST_IN_BOARD = "@@board/MOVE_LIST_IN_BOARD"
export const moveListInBoard = (listToMovePos, newListPos) => ({
  type: MOVE_LIST_IN_BOARD,
  payload: {
    listToMovePos,
    newListPos,
  }
})

// Add a new list at the end of the board
export const ADD_LIST_TO_BOARD = "@@board/ADD_LIST_TO_BOARD";
export const addListToBoard = (listName) => ({
  type: ADD_LIST_TO_BOARD,
  payload: {
    id: uuidv4(),
    name: listName,
  }
})