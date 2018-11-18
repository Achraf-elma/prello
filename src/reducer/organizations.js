// Action types
import {
  initOrganizations,
  SET_ORGANIZATION_LIST,
  ADD_ORGANIZATION_TO_ORGANIZATIONS,
  QUIT_ORGANIZATION,
} from '../action/actionOrgList';


export default ( state = initOrganizations, action) => {
    switch(action.type) {
      case SET_ORGANIZATION_LIST:
        return action.payload;
      case ADD_ORGANIZATION_TO_ORGANIZATIONS:
        return [...state, action.payload];
      case QUIT_ORGANIZATION:
        return state.filter(organization => organization.id !== action.payload);
      default:
        return state;
    }
  }