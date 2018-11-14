// Modules

//Default State
export const initOrganization = {
    id : 'abcde',
    name: 'teamname',
    desc: null,
    descData: null,
    website: null,
    boards : [  {
        "id" : "abcde",
        "name": "CAAAACAAAAA",
        "description" : "no description",
        "closed": false,
        "isPublic": true,    
    
    }
    ],
    invited : false,
    invitations : [],
    displayName: 'Team Name',
    memberships: [    {
        "id": "538627f73cbb44d1bfbb58f1",
        "idMember": "4d5eb12cd76aa113600000c9",
        "email": "prello1@gmail.com,",
        "memberType": "admin",
        "unconfirmed": false
      },
      {
        "id": "53b1a1f8a128e74250f8d0b9",
        "idMember": "4d68050a81bb57af1e006960",
        "email": "prello2@gmail.com,",
        "memberType": "admin",
        "unconfirmed": false
      },
      {
        "id": "53da3738d5e44eafceb802e1",
        "idMember": "4e6655412f872f6c9305b71d",
        "email": "prello3@gmail.com,",
        "memberType": "normal",
        "unconfirmed": false
      },
      {
        "id": "53da5e8572a469607aa8c7d8",
        "idMember": "4f820a995a03e8e82d134ac4",
        "email": "prello4@gmail.com,",
        "memberType": "normal",
        "unconfirmed": false
      },
      {
        "id": "5951237e0f10c6eb9b2476ad",
        "idMember": "595123526d9a31740725bcc3",
        "email": "prello5@gmail.com,",
        "memberType": "normal",
        "unconfirmed": false
      }] //id, idMember, memberType : "admin" | "normal", unconfirmed (boolean = false if accepted, true if invitation pending)
    }

// Action type constants
export const SET_TEAM = "@@organization/SET_TEAM"
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

export const setTeam = (organization) => ({
    type: SET_TEAM,
    payload: organization
  })

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

export const setTeamMemberType = (id, teamMemberToSetType) => ({
    type: SET_TEAM_MEMBER_TYPE,
    payload: {
        id, 
        teamMemberToSetType
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