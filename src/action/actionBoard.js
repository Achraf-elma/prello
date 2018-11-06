// Modules
import uuidv4 from "uuidv4";

// Action type constants
// TODO: Action type constant
export const SET_BOARD_CLOSE = "@@board/SET_BOARD_CLOSE"
export const SET_BOARD_DESC = "@@board/SET_BOARD_DESC"
export const MOVE_LIST_IN_BOARD = "@@board/MOVE_LIST_IN_BOARD"
export const ADD_LIST_TO_BOARD = "@@board/ADD_LIST_TO_BOARD";


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
  closed: 'true' | 'false',
  pos: 0,
}


export const setBoardClose = (id, isClosed) => ({
  type: SET_BOARD_CLOSE,
  payload: {
    id,
    closed: isClosed ? "true" : "false"
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
    idlist: uuidv4(),
    name: listName,
  }
})
