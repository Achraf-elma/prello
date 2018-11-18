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
export const SET_TEAM_NAME = "@@organization/SET_TEAM_NAME"
export const SET_TEAM_DESC = "@@organization/SET_TEAM_DESC"
export const SET_TEAM_WEBSITE = "@@organization/SET_TEAM_WEBSITE"

export const SET_ORGANIZATION_OWNER = "@@organization/SET_ORGANIZATION_OWNER";
export const ADD_MEMBER_TO_ORGANIZATION = "@@organization/ADD_MEMBER_TO_ORGANIZATION"
export const REMOVE_MEMBER_FROM_ORGANIZATION = "@@organization/REMOVE_MEMBER_FROM_ORGANIZATION"

// // Action Builders

export const setOrganization = (organization) => ({
  type: SET_ORGANIZATION,
  payload: organization
})

export const setTeamName = (id, newName) => ({
  type: SET_TEAM_NAME,
  payload: {
    id,
    name: newName
  }
})

export const setTeamDesc = (id, newDesc) => ({
  type: SET_TEAM_DESC,
  payload: {
    id,
    desc: newDesc
  }
})

export const setTeamWebsite = (id, website) => ({
  type: SET_TEAM_WEBSITE,
  payload: website
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