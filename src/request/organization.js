// Modules
import client from './client';
import { ObjectId } from 'bson';

export const fetchOrganization = (idOrganization) => (
  client.get(`/api/organizations/${idOrganization}`)
    .then(({ data }) => ({
      ...data,
      members: data.idMembers,
      isOwner: data.idOwner === client.me,
    }))
);
export const fetchOrganizationBoards = (idOrganization) =>  {
  return client.get(`/api/organizations/${idOrganization}/boards`)
  .then(response => response.data)
}

export const updateOrganization = (Organization) =>  {
  return client.put(`/api/organizations/${Organization.idOrganization}`, Organization)
  .then(response => response.data)
}

export const createOrganization = (organization) =>  {
  let id = new ObjectId();
  return client.put(`/api/organizations/${id}`, {
    _id: id,
    name: organization.name,
    desc: organization.desc,
    idOwner: client.me,
  })
  .then(response => response.data);
}

export const inviteMemberToOrganization = (idOrganization, emailMember) => (
  client.post(`/api/organizations/${idOrganization}/members`, {
    emailMember,
  })
  .then(response => response.data)
);

export const fireMemberFromOrganization = (idOrganization, idMember) => (
  client.delete(`/api/organizations/${idOrganization}/members/${idMember}`)
    .then(response => response.data)
);

export const transfertOrganizationOwnership = (idOrganization, idMember) => (
  client.post(`/api/organizations/${idOrganization}/members/${idMember}/owner`)
  .then(response => response.data)
)