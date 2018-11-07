// Modules
import uuidv4 from "uuidv4";

// Action type constants
// TODO: Action type constant
export const SET_BOARD_NAME = "@@board/SET_BOARD_NAME"
export const SET_BOARD_DESC = "@@board/SET_BOARD_DESC"
export const MOVE_LIST_IN_BOARD = "@@board/MOVE_LIST_IN_BOARD"
export const ADD_LIST_TO_BOARD = "@@board/ADD_LIST_TO_BOARD"
export const SET_BOARD_LIST = "@@board/SET_BOARD_LIST"
export const SET_BOARD_MEMBERSHIPS = "@@board/SET_BOARD_MEMBERSHIPS"
export const SET_BOARD_OWNERS = "@@board/SET_BOARD_OWNERS"
export const SET_BOARD_CLOSE = "@@board/SET_BOARD_CLOSE"
export const SET_BOARD_PRIVACY = "@@board/SET_BOARD_PRIVACY"


// default state
export const initBoard = {
  id: "5612e4f91b25c15e873722b8",
  name: "My Board",
  desc: "My first board",
  lists : [
    {}
  ],
  memberships: [
    {
      "id": "5612e4fb1b25c15e8737234b",
      "idMember": "53baf533e697a982248cd73f",
      "memberType": "admin",
      "unconfirmed": false
    },
    {
      "id": "5925e4fc63096260c349cbd4",
      "idMember": "53cd82cd7ed746db278c4f32",
      "memberType": "normal",
      "unconfirmed": false
    }
  ],
  owners: [
    {
      "id": "5612e4fb1b25c15e8737234b",
      "idMember": "53baf533e697a982248cd73f",
      "memberType": "admin",
      "unconfirmed": false
    },
    {
      "id": "5925e4fc63096260c349cbd4",
      "idMember": "53cd82cd7ed746db278c4f32",
      "memberType": "normal",
      "unconfirmed": false
    }
  ],
  closed: false,
  pos: 0,
  isPrivate: 'true' | 'false',
}



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
export const addListToBoard = (listName) => ({
  type: ADD_LIST_TO_BOARD,
  payload: {
    idList: uuidv4(),
    name: listName,
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

export const setBoardClose = (id, newClosed) => ({
  type: SET_BOARD_CLOSE,
  payload: {
    id: id,
    closed: newClosed
  }
})


export const setBoardPrivacy = (id, newPrivacy) => ({
  type: SET_BOARD_CLOSE,
  payload: {
    id,
    isPrivate: newPrivacy
  }
})



