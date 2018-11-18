// Modules
import { combineReducers } from 'redux';

// Definitions
import {
  initOrganization,
  SET_ORGANIZATION,
  SET_ORGANIZATION_SETTINGS,
  SET_ORGANIZATION_OWNER,
  ADD_MEMBER_TO_ORGANIZATION,
  REMOVE_MEMBER_FROM_ORGANIZATION,
} from "../action/actionOrganization";

const name = (state = initOrganization.name, action) => {
  switch (action["type"]) {
    case SET_ORGANIZATION:
    case SET_ORGANIZATION_SETTINGS:
      return action.payload.name;
    default:
      return state;
  }
}

const desc = (state = initOrganization.desc, action) => {
  switch (action["type"]) {
    case SET_ORGANIZATION:
    case SET_ORGANIZATION_SETTINGS:
      return action.payload.desc || "";
    default:
      return state;
  }
}

const website = (state = initOrganization.website, action) => {
  switch (action["type"]) {
    case SET_ORGANIZATION:
    case SET_ORGANIZATION_SETTINGS:
      return action.payload.website ||  "";
    default:
      return state;
  }
}
const isOwner = (state = initOrganization.isOwner, action) => {
  switch (action.type){
    case SET_ORGANIZATION:
      return action.payload.isOwner || false;
    case SET_ORGANIZATION_OWNER:
      return false;
    default:
      return state;
  }
};

const members = (state = initOrganization.members, action) => {
  switch (action["type"]) {
    case SET_ORGANIZATION:
      return action.payload.members;
    case ADD_MEMBER_TO_ORGANIZATION:
      return [...state, action.payload];
    case REMOVE_MEMBER_FROM_ORGANIZATION:
      return state.filter(member => member.id !== action.payload);
    case SET_ORGANIZATION_OWNER:
      return [...state.filter(member => member.id !== action.payload.idOwner), action.payload.member];
    default:
      return state;
  }
}

// Main Reducer
export default combineReducers({
  name,
  desc,
  website,
  isOwner,
  members
})
