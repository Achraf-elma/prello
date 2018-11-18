// Modules

//Default State
export const initOrganization = {
  name:"",
  desc:"",
  website: "",
  isOwner: false,
  members: []
}

// Action type constants
export const SET_ORGANIZATION = "@@organization/SET_ORGANIZATION";
export const SET_ORGANIZATION_SETTINGS = "@@organization/SET_ORGANIZATION_SETTINGS";

export const SET_ORGANIZATION_OWNER = "@@organization/SET_ORGANIZATION_OWNER";
export const ADD_MEMBER_TO_ORGANIZATION = "@@organization/ADD_MEMBER_TO_ORGANIZATION"
export const REMOVE_MEMBER_FROM_ORGANIZATION = "@@organization/REMOVE_MEMBER_FROM_ORGANIZATION"

// // Action Builders

export const setOrganization = (organization) => ({
  type: SET_ORGANIZATION,
  payload: organization
})

export const setOrganizationSettings = (name, website, desc) => ({
  type: SET_ORGANIZATION_SETTINGS,
  payload: { name, website, desc },
})

export const addMemberToOrganization = (member) => ({
  type: ADD_MEMBER_TO_ORGANIZATION,
  payload: member,
});

export const removeMemberFromOrganization = (idMember) => ({
  type: REMOVE_MEMBER_FROM_ORGANIZATION,
  payload: idMember
});

export const setOrganizationOwner = (idMember, exOwner) => ({
  type: SET_ORGANIZATION_OWNER,
  payload: {
    idOwner: idMember,
    member: exOwner,
  },
})