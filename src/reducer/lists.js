// Action types
import { MOVE_LIST_IN_BOARD, ADD_LIST_TO_BOARD } from '../action/actionBoard';
import { SET_LISTS } from '../action/actionLists';


export default ( state = [], action) => {
  switch(action.type) {
    case SET_LISTS:
      return action.payload;
    case ADD_LIST_TO_BOARD:
      return [...state, action.payload]
    case MOVE_LIST_IN_BOARD:
      let listToMove = state[action.payload.listToMovePos];
      let lists = state.filter((list, index) => index !== action.payload.listToMovePos);
       
      let prevList = lists[action.payload.newListPos] || lists[action.payload.newListPos-1];
      let nextList = lists[action.payload.newListPos+1] || lists[action.payload.newListPos] ;
      return [
        ...lists.slice(0, action.payload.newListPos),
        {...listToMove },
        ...lists.slice(action.payload.newListPos)
      ];
    default:
      return state;
  }
}
