// Action type constants
// TODO: Action type constant
export const CLOSE_BOARD_FROM_BOARDS = "@@board/CLOSE_BOARD_FROM_BOARDS";
export const SET_BOARD_LIST = "@@board/SET_BOARD_LIST";
export const SELECT_BOARD = "@@board/SELECT_BOARD";
export const ADD_BOARD_TO_BOARDS = "@@board/ADD_BOARD_TO_BOARDS";
export const UPDATE_BOARD = "@@board/UPDATE_BOARD";

// default state
export const initBoards = {
    boards: [
        {
      id: "b1b1b0b1b1b0b1b1b0b1b1b0",
      name: "My private board",
      desc: "My first board",
      lists : [
        {}
      ],
      labelNames : {
        "green": "",
        "yellow": "good to go",
        "orange": "",
        "red": "",
        "purple": "",
        "blue": "",
        "sky": "",
        "lime": "",
        "pink": "",
        "black": ""
      },
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
      isPublic: true,
    },
    {
        id: "PUBLIC",
        name: "Public Board",
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
        isPublic: false,
      },
      {
        id: "IDDDDDD",
        name: "Private Board",
        desc: "My private board 2",
        lists : [
          {}
        ],
        labelNames : {
          "green": "",
          "yellow": "good to go",
          "orange": "",
          "red": "",
          "purple": "",
          "blue": "",
          "sky": "",
          "lime": "",
          "pink": "",
          "black": ""
        },
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
        isPublic: true,
      }
    ]
}
    

export const setBoardList = (boardList) => ({
  type: SET_BOARD_LIST,
  payload: boardList,
})

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
export const addBoardToBoards = (board) => ({
  type: ADD_BOARD_TO_BOARDS,
  payload: {
    ...board,
    labelName : {
      "green": "",
      "yellow": "good to go",
      "orange": "",
      "red": "",
      "purple": "",
      "blue": "",
      "sky": "",
      "lime": "",
      "pink": "",
      "black": ""
    },
  }
})
