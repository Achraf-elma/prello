// Action types
import { initOrganizations, SET_ORGANIZATION_LIST, ADD_ORGANIZATION_TO_ORGANIZATIONS } from '../action/actionOrgList';


export default ( state = initOrganizations, action) => {
    switch(action.type) {
      case SET_ORGANIZATION_LIST:
        return action.payload;
      case ADD_ORGANIZATION_TO_ORGANIZATIONS:
        return [...state, action.payload]
      default:
        return state;
    }
  }