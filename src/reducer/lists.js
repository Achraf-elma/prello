// Action types
import { MOVE_LIST_IN_BOARD, ADD_LIST_TO_BOARD } from '../action/actionBoard';
import { SET_LISTS } from '../action/actionLists';
import { SET_LIST_NAME, SET_LIST_CLOSED } from '../action/actionList';
import list from './list';


export default ( state = [], action) => {
  switch(action.type) {
    case SET_LISTS:
      return action.payload.map(list=> ({
        idList : list._id , 
        ...list
      }));
      case SET_CARD_DESC:

    case SET_LIST_NAME:
    case SET_LIST_CLOSED:
      var idxListToUpdate = state.findIndex(list => list.id === action.payload.id)
      var listUptaded = list(state[idxListToUpdate], action)
      var nextLists = [...state]
      nextLists[idxListToUpdate] = listUptaded;
      return  nextLists;

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
