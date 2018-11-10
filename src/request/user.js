import client from './client';
import {ErrorLogin, ErrorForbidden, ErrorNotFound} from './requestErrors';

export const fetchUser = (idUser) => (
  client.get(`/members/${idUser}`)
  .then( response => response.data)
  .catch(error => Promise.reject(error.response && error.response.status === 401 ? new ErrorLogin(error.response.data) : error ))
  .catch(error => Promise.reject(error.response && error.response.status === 403 ? new ErrorForbidden(error.response.data) : error))
  .catch(error => Promise.reject(error.response && error.response.status === 404 ? new ErrorNotFound(error.response.data) : error))
)
export const saveUserCredentials = (credentials) => Promise.resolve();
export const saveUserPreferences = (preferences) => Promise.resolve();