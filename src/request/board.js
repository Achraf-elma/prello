// Modules
import client from './client';

export const fetchBoard = (idBoard) =>  {
  console.log(idBoard);
  return client.get(`/api/boards/${idBoard}`)
  .then(response => response.data)
  .catch(err => console.log(err))
}
export const fetchBoardLists = (idBoard) =>  {
  return client.get(`/api/boards/${idBoard}/lists`)
  .then(response => response.data)
}
export const fetchBoardCards = (idBoard) =>  {
  return client.get(`/api/boards/${idBoard}/cards`)
  .then(response => response.data)
}
