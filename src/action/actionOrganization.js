// Modules

//Default State
export const initOrganization = {
    id : null,
    name: 'teamname',
    desc: null,
    descData: null,
    website: null,
    boards : [
        {}
    ],
    invited : false,
    invitations : [],
    displayName: 'Team Name',
    memberships: [{
        "id": "5612e4fb1b25c15e8737234b",
        "idMember": "53baf533e697a982248cd73f",
        "memberType": "admin",
        "unconfirmed": false
      },
      {
        "id": "5612e4fb1b25c15e8737234b",
        "idMember": "53baf533e697a982248cd73f",
        "memberType": "admin",
        "unconfirmed": false
      }] //id, idMember, memberType : "admin" | "normal", unconfirmed (boolean = false if accepted, true if invitation pending)
    }

// Action type constants
export const SET_TEAM_NAME = "@@organization/SET_TEAM_NAME"
export const SET_TEAM_DISPLAY_NAME = "@@organization/SET_TEAM_DISPLAY_NAME"
export const SET_TEAM_DESC = "@@organization/SET_TEAM_DESC"
export const SET_TEAM_WEBSITE = "@@organization/SET_TEAM_WEBSITE"

export const ADD_NEW_BOARD_ID = "@@organization/ADD_NEW_BOARD_ID"
export const REMOVE_BOARD_ID = "@@organization/REMOVE_BOARD_ID"

export const ADD_NEW_TEAM_MEMBER = "@@organization/ADD_NEW_TEAM_MEMBER"
export const DELETE_TEAM_MEMBER = "@@organization/DELETE_TEAM_MEMBER"
export const SET_TEAM_MEMBER_TYPE = "@@organization/SET_TEAM_MEMBER_TYPE"

// Action Builders
export const setTeamName = (id, newName) => ({
    type: SET_TEAM_NAME,
    payload: {
        id, 
        name : newName
    }
}) 

export const setTeamDisplayName = (id, newDisplayName) => ({
    type: SET_TEAM_DISPLAY_NAME,
    payload: {
        id, 
        displayName : newDisplayName
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

export const removeBoardId = (id, boardIdToRemove) => ({
    type: REMOVE_BOARD_ID,
    payload: {
        id, 
        boardIdToRemove
    }
}) 