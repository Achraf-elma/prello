// Modules
import uuidv4 from "uuidv4";

// Action type constants
// TODO: Action type constant
export const CLOSE_BOARD_FROM_BOARDS = "@@board/CLOSE_BOARD_FROM_BOARDS";
export const SELECT_BOARD = "@@board/SELECT_BOARD";
export const ADD_BOARD_TO_BOARDS = "@@board/ADD_LIST_TO_BOARD";
export const UPDATE_BOARD = "@@board/UPDATE_BOARD";

// default state
export const initBoards = {
    boards: [
        {
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
    },
    {
        id: "5612e4f91b25c19e873722b8",
        name: "My Board 2",
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
    ]
}
    



export const removeBoardFromBoards = (idBoardToClose, closed) => ({
  type: CLOSE_BOARD_FROM_BOARDS,
  payload: {
    idBoardToClose,
    closed
  }
})

export const updateBoard = (id, newBoard) => ({
  type: UPDATE_BOARD,
  payload: {
    id,
    newBoard
  }
})

// Move a list position in the board
export const addBoardToBoards = (name, desc, members, owners) => ({
  type: ADD_BOARD_TO_BOARDS,
  payload: {
    id: uuidv4(),
    name: name, 
    desc: desc, 
    members: members, 
    owners: owners
  }
})
