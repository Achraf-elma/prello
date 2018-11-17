// Modules
import client from './client';
import { ErrorLogin, ErrorForbidden, ErrorNotFound } from './requestErrors';

const rematchError = (error) => (
  Promise.reject(error)
    .catch(error => Promise.reject(error.response && error.response.status === 401 ? new ErrorLogin(error.response.data) : error))
    .catch(error => Promise.reject(error.response && error.response.status === 403 ? new ErrorForbidden(error.response.data) : error))
    .catch(error => Promise.reject(error.response && error.response.status === 404 ? new ErrorNotFound(error.response.data) : error))
)

export const fetchBoard = (idBoard) =>  {
  return client.get(`/api/boards/${idBoard}`)
  .then(response => response.data)
  .catch(err => console.error(err))
}
export const fetchBoardLists = (idBoard) =>  {
  return client.get(`/api/boards/${idBoard}/lists`)
  .then(response => response.data)
}
export const fetchBoardCards = (idBoard) =>  {
  return client.get(`/api/boards/${idBoard}/cards`)
  .then(response => response.data)
}

export const fetchBoardLabels = (idBoard ) =>  {
  return client.get(`/api/boards/${idBoard}/labels`)
  .then(response => response.data)
}


export const createBoard = (board, owner = client.me) => (
  client.put(`/api/boards/${board.id}`, {
    _id: board.id,
    name: board.name,
    desc: board.desc,
    idMembers: [], //board.members || [],
    idOwner: owner,
    isPublic: board.isPublic,
    labelNames: {
      "green": "todo",
      "yellow": "",
      "orange": "",
      "red": "",
      "purple": "",
      "blue": "",
      "sky": "",
      "lime": "",
      "pink": "",
      "black": ""
    }
  })
  .then( response => response.data)
  .catch(rematchError)
)

export const addOrganizationToBoard = (idBoard, idOrganization) => (
  client.put(`/api/boards/${idBoard}/organizations/${idOrganization}`)
  .then(response => response.data)
  .catch(rematchError)
)