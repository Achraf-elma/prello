// Modules
import client from './client';
import { ObjectId } from 'bson';

export const fetchOrganization = (idOrganization) =>  {
  return client.get(`/api/organizations/${idOrganization}`)
  .then(response => response.data)
  .catch(err => console.log(err))
}
export const fetchOrganizationBoards = (idOrganization) =>  {
  return client.get(`/api/organizations/${idOrganization}/boards`)
  .then(response => response.data)
}
export const fetchOrganizationMembers = (idOrganization) =>  {
  return client.get(`/api/organizations/${idOrganization}/members`)
  .then(response => response.data)
  .catch(err => console.log(err))
}

export const updateOrganization = (Organization) =>  {
  return client.put(`/api/organizations/${Organization.idOrganization}`, Organization)
  .then(response => response.data)
}

export const addBoardToOrganization = (idOrganization, idBoard) => (
  client.put(`/api/organizations/${idOrganization}/boards/${idBoard}`)
  .then( response => response.data)
)

export const createOrganization = (organization) =>  {
  let id = new ObjectId();
  return client.put(`/api/organizations/${id}`, {
    _id: id,
    name: organization.name,
    desc: organization.desc,
    idOwner: client.me,
  })
  .then(response => response.data)
}
