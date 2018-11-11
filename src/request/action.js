import client from './client';

export const fetchActionTypes = () => (
  client.get("/api/actions/types")
  .then(response => response.data)
);

export const dispatchAction = (action) => (
  client.post("/api/actions/", action)
  .then(response => response.data)
)