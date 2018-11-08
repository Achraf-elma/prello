// Modules
import uuidv4 from "uuidv4";

// Action type constants
export const SELECT_ORGANIZATION = "@@organization/SELECT_ORGANIZATION";
export const ADD_ORGANIZATION_TO_ORGANIZATIONS = "@@organization/ADD_ORGANIZATION_TO_ORGANIZATIONS";

// default state
export const initOrganizations = {
    organizations: [
        {
            id : 'abcde',
            name: 'myfirstteam',
            desc: null,
            descData: null,
            website: null,
            boards : [
                {}
            ],
            invited : false,
            invitations : [],
            displayName: 'My First Team',
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
    ]
}

export const addOrganizationToOrganizations = (displayName, desc) => ({
    type: ADD_ORGANIZATION_TO_ORGANIZATIONS,
    payload: {
      id: uuidv4(),
      displayName: displayName, 
      name: displayName, //TODO
      desc: desc ? desc : 'no description given', 
      website: 'no website given'
    }
  })