export const REMOVE_MEMBER_FROM_BOARD = "@@members/REMOVE_MEMBER_FROM_BOARD";
export const ADD_MEMBER_TO_BOARD = "@@members/ADD_MEMBER_TO_BOARD";
export const SET_BOARD_OWNER = "@@members/SET_BOARD_OWNER";
export const ADD_ORGANIZATION_TO_BOARD = "@@members/ADD_ORGANIZATION_TO_BOARD";
export const REMOVE_ORGANIZATION_FROM_BOARD = "@@members/REMOVE_ORGANIZATION_FROM_BOARD";

export const addMemberToBoard = ( member ) => ({
  type: ADD_MEMBER_TO_BOARD,
  payload: member,
})

export const removeMemberFromBoard = ( idMember ) => ({
  type: REMOVE_MEMBER_FROM_BOARD,
  payload: idMember,
})

export const setBoardOwner = ( idMember, exOwner ) => ({
  type: SET_BOARD_OWNER,
  payload: {
    idOwner: idMember,
    member: exOwner,
  }
})

export const addOrganizationToBoard = (organization) => ({
  type: ADD_ORGANIZATION_TO_BOARD,
  payload: organization,
})

export const removeOrganizationFromBoard = (idOrganization) => ({
  type: REMOVE_ORGANIZATION_FROM_BOARD,
  payload: idOrganization,
})