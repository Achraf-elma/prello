// Action types
import { MOVE_LIST_IN_BOARD, ADD_LIST_TO_BOARD } from '../action/actionBoard';
import { SET_LISTS } from '../action/actionLists';
import { SET_LIST_NAME, SET_LIST_CLOSED } from '../action/actionList';
import list from './list';


export default (state = [], action) => {
  switch (action.type) {
    case SET_LISTS:
      return action.payload.map(list => ({
        idList: list._id,
        ...list
      }));


    case SET_LIST_NAME:
    case SET_LIST_CLOSED:
      var idxListToUpdate = state.findIndex(list => list.idList === action.payload.id)
      var listUptaded = list(state[idxListToUpdate], action)
      var nextLists = [...state]
      nextLists[idxListToUpdate] = listUptaded;
      return nextLists;
    case ADD_LIST_TO_BOARD:
      return [...state, action.payload]
    default:
      return state;
  }
}
