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

export const updateOrganizationSettings = (idOrganization, name, website, desc) =>  (
  client.put(`/api/organizations/${idOrganization}`, {
    name, website, desc
  })
  .then(response => response.data)
);

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

export const fireMemberFromOrganization = (idOrganization, idMember = client.me) => (
  client.delete(`/api/organizations/${idOrganization}/members/${idMember}`)
    .then(response => response.data)
);

export const transfertOrganizationOwnership = (idOrganization, idMember) => (
  client.post(`/api/organizations/${idOrganization}/members/${idMember}/owner`)
  .then(response => response.data)
)

export const removeOrganization = (idOrganization) => (
  client.delete(`/api/organizations/${idOrganization}`)
  .then( response => response.data)
)