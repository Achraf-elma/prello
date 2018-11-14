// Modules
import { combineReducers } from 'redux';

// Definitions
import {initOrganization, SET_TEAM_NAME, SET_TEAM_DISPLAY_NAME, SET_TEAM_DESC, SET_TEAM_WEBSITE, ADD_NEW_TEAM_MEMBER, ADD_NEW_BOARD_ID, DELETE_TEAM_MEMBER, SET_TEAM_MEMBER_TYPE, REMOVE_BOARD_ID} from "../action/actionOrganization";

const id = ( state = initOrganization.id, action ) => state
const name = ( state = initOrganization.name, action ) => {
    switch(action["type"]) {
      case SET_TEAM_NAME:
        return action.payload.name
      default:
        return state;
    }
  }
const desc = ( state = initOrganization.desc, action ) => {
    switch(action["type"]) {
      case SET_TEAM_DESC:
        return action.payload.desc
      default:
        return state;
    }
  }
const descData = ( state = initOrganization.descData, action ) => state
const website = ( state = initOrganization.website, action ) => {
    switch(action["type"]) {
      case SET_TEAM_WEBSITE:
        return action.payload.website;
      default:
        return state;
    }
  }
  //May need to be changed
const boards = ( state = initOrganization.boards, action ) => {
    switch(action["type"]) {
      case ADD_NEW_BOARD_ID:
        return [ ...state, action.payload.newBoardId];
      case REMOVE_BOARD_ID:
        return state.filter(id => id !== action.payload.boardIdToRemove)
      default:
        return state;
    }
  }
const invited = ( state = initOrganization.invited, action ) => state
const invitations = ( state = initOrganization.invitations, action ) => state
const displayName = ( state = initOrganization.displayName, action ) => {
  switch(action["type"]) {
    case SET_TEAM_DISPLAY_NAME:
      return action.payload.displayName
    default:
      return state;
  }
}
const memberships = ( state = initOrganization.memberships, action ) => {
    switch(action["type"]) {
      case ADD_NEW_TEAM_MEMBER:
        return [ ...state, action.payload.newTeamMember]
      case DELETE_TEAM_MEMBER:
        return state.filter(member => member.idMember !== action.payload.teamMemberToDelete)
      case SET_TEAM_MEMBER_TYPE:
        var index = state.findIndex(e => e.idMember === action.payload.teamMemberToSetType.idMember )
        state[index].memberType === "normal" ? state[index].memberType = "admin" : state[index].memberType = "normal"
        return [...state.slice(0, index), state[index], ...state.slice(index+1)]
      default:
        return state;
    }
  }

// Main Reducer
export default combineReducers({
  id,
  name,
  desc,
  descData,
  website,
  boards,
  invited,
  invitations,
  displayName,
  memberships
})
