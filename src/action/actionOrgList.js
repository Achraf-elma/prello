// Action type constants
export const SET_ORGANIZATION_LIST = "@@organization/SET_ORGANIZATION_LIST";
export const ADD_ORGANIZATION_TO_ORGANIZATIONS = "@@organization/ADD_ORGANIZATION_TO_ORGANIZATIONS";

// default state
export const initOrganizations = [];

export const addOrganizationToOrganizations = (organization) => ({
  type: ADD_ORGANIZATION_TO_ORGANIZATIONS,
  payload: organization,
})

export const setOrganizations = (organizations) => ({
  type: SET_ORGANIZATION_LIST,
  payload: organizations,
})