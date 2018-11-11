// Modules
import client from './client';
 
import {} from './requestErrors.js';

export const fetchOrganization = (idOrganization) =>  {
  return client.get(`/api/organization/${idOrganization}`)
  .then(response => response.data)
  .catch(err => console.log(err))
}
export const fetchOrganizationBoards = (idOrganization) =>  {
  return client.get(`/api/organization/${idOrganization}/boards`)
  .then(response => response.data)
}
export const fetchOrganizationMembers = (idOrganization) =>  {
  return client.get(`/api/organization/${idOrganization}/members`)
  .then(response => response.data)
  .catch(err => console.log(err))
}




export const updateOrganization = (Organization) =>  {
    return client.put(`/api/organization/${Organization.idOrganization}`, Organization)
    .then(response => response.data)
  }




  export const createOrganization = (Organization) =>  {
    return client.post(`/api/organization/${Organization.idOrganization}`, Organization)
    .then(response => response.data)
  }
