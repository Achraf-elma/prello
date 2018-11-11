import client from './client';
import {ErrorLogin, ErrorForbidden, ErrorNotFound} from './requestErrors';

const rematchError = (error) => (
  Promise.reject(error)
  .catch(error => Promise.reject(error.response && error.response.status === 401 ? new ErrorLogin(error.response.data) : error))
  .catch(error => Promise.reject(error.response && error.response.status === 403 ? new ErrorForbidden(error.response.data) : error))
  .catch(error => Promise.reject(error.response && error.response.status === 404 ? new ErrorNotFound(error.response.data) : error))
)

export const fetchUser = (idMember) => {
  idMember = idMember && idMember !== "me" ? idMember : client.me;
  return (
    client.get(`/api/members/${idMember}`)
    .then( response => response.data)
    .catch(rematchError)
  );
}

export const saveUserCredentials = (idMember, credentials) => {
  idMember = idMember && idMember !== "me" ? idMember : client.me;
  return (
    client.put(`/api/members/${idMember}/`, {...credentials})
    .then(response => response.data)
    .catch(rematchError)
  );
}

export const saveUserPreferences = (idMember, preferences) => {
  idMember = idMember && idMember !== "me" ? idMember : client.me;
  return (
    client.put(`/api/members/${idMember}/`, {preferences})
      .then(response => response.data)
      .catch(rematchError)
  );
}