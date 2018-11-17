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
          id: null,
          name: "My board",
          desc: "My first board",
          lists : [{}],
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
      memberships: [],
      owners: [ {}],
      closed: false,
      isPublic: true,
    },
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
  }
})
