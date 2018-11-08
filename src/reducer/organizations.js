// Modules
import { combineReducers } from 'redux';

// Action types
import {initOrganizations, SELECT_ORGANIZATION, ADD_ORGANIZATION_TO_ORGANIZATIONS } from '../action/actionOrgList';


export default ( state = initOrganizations.organizations, action) => {
    switch(action.type) {
      case ADD_ORGANIZATION_TO_ORGANIZATIONS:
        return [...state, action.payload]
      default:
        return state;
    }
  }