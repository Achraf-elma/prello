// Modules
import client from './client';
import { ErrorLogin, ErrorForbidden, ErrorNotFound } from './requestErrors';

const rematchError = (error) => (
  Promise.reject(error)
    .catch(error => Promise.reject(error.response && error.response.status === 401 ? new ErrorLogin(error.response.data) : error))
    .catch(error => Promise.reject(error.response && error.response.status === 403 ? new ErrorForbidden(error.response.data) : error))
    .catch(error => Promise.reject(error.response && error.response.status === 404 ? new ErrorNotFound(error.response.data) : error))
)


export const fetchComments = (idCard) =>  {
    return client.get(`/api/cards/${idCard}/comments`)
    .then(response => response.data)
    .catch(err => console.error(err))
  }