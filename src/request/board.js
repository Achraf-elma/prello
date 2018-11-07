// Modules
import client from './client';


export const fetchBoard = (idBoard) =>  {
  client.get("/api/board/" + idBoard)
  .then(response => response.data)
}