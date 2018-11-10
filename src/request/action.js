import client from './client';

export const fetchActionTypes = () => (
  client.get("/actions/types")
  .then(response => response.data)
);