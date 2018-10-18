// Modules

//Default State
export const initOrganisation = {
    id : null,
    name: 'teamname',
    desc: null,
    descData: null,
    website: null,
    idBoards : [],
    invited : false,
    invitations : [],
    displayName: 'Team Name',
    memberships: [] //id, idMember, memberType : admin | normal, unconfirmed
    }

// Action type constants
export const SET_TEAM_NAME = "@@organisation/SET_TEAM_NAME"
export const SET_TEAM_DESC = "@@organisation/SET_TEAM_DESC"
export const SET_TEAM_WEBSITE = "@@organisation/SET_TEAM_WEBSITE"

export const ADD_NEW_BOARD_ID = "@@organisation/ADD_NEW_BOARD_ID"
export const REMOVE_BOARD_ID = "@@organisation/REMOVE_BOARD_ID"

export const ADD_NEW_TEAM_MEMBER = "@@organisation/ADD_NEW_TEAM_MEMBER"
export const DELETE_TEAM_MEMBER = "@@organisation/DELETE_TEAM_MEMBER"
export const SET_TEAM_MEMBER_TYPE = "@@organisation/SET_TEAM_MEMBER_TYPE"

// Action Builders
export const setTeamName = (id, newName) => ({
    type: SET_TEAM_NAME,
    payload: {
        id, 
        name : newName
    }
}) 

export const setTeamDesc = (id, newDesc) => ({
    type: SET_TEAM_DESC,
    payload: {
        id, 
        desc : newDesc
    }
}) 

export const setTeamWebsite = (id, newWebsite) => ({
    type: SET_TEAM_WEBSITE,
    payload: {
        id, 
        website : newWebsite
    }
}) 

export const addNewTeamMember = (id, newTeamMember) => ({
    type: ADD_NEW_TEAM_MEMBER,
    payload: {
        id, 
        newTeamMember
    }
}) 

export const deleteTeamMember = (id, teamMemberToDelete) => ({
    type: DELETE_TEAM_MEMBER,
    payload: {
        id, 
        teamMemberToDelete
    }
}) 

export const setTeamMemberType = (id, teamMemberToSetType, type) => ({
    type: SET_TEAM_MEMBER_TYPE,
    payload: {
        id, 
        teamMemberToSetType,
        type
    }
}) 


export const addNewBoardId = (id, newBoardId) => ({
    type: ADD_NEW_BOARD_ID,
    payload: {
        id, 
        newBoardId
    }
}) 

export const removeBoardId = (id, BoardIdToRemove) => ({
    type: REMOVE_BOARD_ID,
    payload: {
        id, 
        BoardIdToRemove
    }
}) 