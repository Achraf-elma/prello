// Modules
import uuidv4 from "uuidv4";

// Action type constants
// TODO: Action type constant
export const SET_BOARD= "@@board/SET_BOARD"

export const SET_BOARD_NAME = "@@board/SET_BOARD_NAME"
export const SET_BOARD_DESC = "@@board/SET_BOARD_DESC"
export const MOVE_LIST_IN_BOARD = "@@board/MOVE_LIST_IN_BOARD"
export const ADD_LIST_TO_BOARD = "@@board/ADD_LIST_TO_BOARD"
export const SET_BOARD_LIST = "@@board/SET_BOARD_LIST"
export const SET_BOARD_MEMBERSHIPS = "@@board/SET_BOARD_MEMBERSHIPS"
export const SET_BOARD_OWNERS = "@@board/SET_BOARD_OWNERS"
export const SET_BOARD_CLOSE = "@@board/SET_BOARD_CLOSE"
export const SET_BOARD_PRIVACY = "@@board/SET_BOARD_PRIVACY"
export const ADD_SET_LABEL_TO_BOARD = "@@board/ADD_SET_LABEL_TO_BOARD"


// default state
export const initBoard = {
  id: null,
  name: "My board",
  desc: "My description",
  lists : [{}],
  labelNames : {
      "green": "",
      "yellow": "",
      "orange": "",
      "red": "good to go",
      "purple": "",
      "blue": "",
      "sky": "",
      "lime": "",
      "pink": "",
      "black": ""
    },
  memberships: [{}],
  owners: [{}],
  closed: false,
  isPublic: true,
}

export const setBoard = (board) => ({
  socketAction:true,
  type: SET_BOARD,
  payload: board
})

export const setBoardName = (id, newName) => ({
  type: SET_BOARD_NAME,
  payload: {
    id,
    name: newName
  }
})

export const setBoardDesc = (id, newDesc) => ({
  type: SET_BOARD_DESC,
  payload: {
    id,
    desc: newDesc
  }
})

// Move a list position in the board
export const moveListInBoard = (listToMovePos, newListPos) => ({
  type: MOVE_LIST_IN_BOARD,
  payload: {
    listToMovePos,
    newListPos,
  }
})

// Add a new list at the end of the board
export const addListToBoard = (idBoard,listName) => ({
  type: ADD_LIST_TO_BOARD,
  payload: {

    idBoard : idBoard,
    name: listName
  }
})

export const setBoardMemberships = (id, newMemberships) => ({
  type: SET_BOARD_MEMBERSHIPS,
  payload: {
    id,
    memberships: newMemberships
  }
})

export const setBoardOwners = (id, newBoardOwners) => ({
  type: SET_BOARD_OWNERS,
  payload: {
    id,
    owners: newBoardOwners
  }
})

export const setBoardClose = (id, closed) => ({
  type: SET_BOARD_CLOSE,
  payload: {
    id,
    closed
  }
})


export const setBoardPrivacy = (id, isPublic) => ({
  type: SET_BOARD_PRIVACY,
  payload: {
    id,
    isPublic
  }
})

export const addLabelToBoard = (id, name, color) => ({
  type: ADD_SET_LABEL_TO_BOARD,
  payload: {
    id: id,
    name: name,
    color : color,
  }
})