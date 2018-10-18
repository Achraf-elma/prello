// Modules
import { combineReducers } from 'redux';

// Definitions
// TODO: action type constants
import {initOrganisation, SET_TEAM_NAME, SET_TEAM_DESC, SET_TEAM_WEBSITE, ADD_NEW_TEAM_MEMBER, ADD_NEW_BOARD_ID, DELETE_TEAM_MEMBER} from "../action/actionOrganisation";

const id = ( state = initOrganisation.id, action ) => state
const name = ( state = initOrganisation.name, action ) => {
    switch(action["type"]) {
      case SET_TEAM_NAME:
        return action.payload.name
      default:
        return state;
    }
  }
const desc = ( state = initOrganisation.desc, action ) => {
    switch(action["type"]) {
      case SET_TEAM_DESC:
        return action.payload.desc
      default:
        return state;
    }
  }
const descData = ( state = initOrganisation.descData, action ) => state
const website = ( state = initOrganisation.website, action ) => {
    switch(action["type"]) {
      case SET_TEAM_WEBSITE:
        return action.payload.website
      default:
        return state;
    }
  }
const idBoards = ( state = initOrganisation.idBoards, action ) => {
    switch(action["type"]) {
      case ADD_NEW_BOARD_ID:
        return [ ...state, action.payload.newBoardId]
      default:
        return state;
    }
  }
const invited = ( state = initOrganisation.invited, action ) => state
const invitations = ( state = initOrganisation.invitations, action ) => state
const displayName = ( state = initOrganisation.displayName, action ) => state
const memberships = ( state = initOrganisation.memberships, action ) => {
    switch(action["type"]) {
      case ADD_NEW_TEAM_MEMBER:
        return [ ...state, action.payload.newTeamMember]
      case DELETE_TEAM_MEMBER:
        return state; //TODO
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
  idBoards,
  invited,
  invitations,
  displayName,
  memberships
})
