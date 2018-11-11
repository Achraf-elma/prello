import axios from 'axios';
import client from './client';

import {ErrorLogin, ErrorUncomplete} from './requestErrors';

// Errors
const NO_TOKEN = "NO TOKEN";

/**
 * @desc Log in api service and set JWT token
 * @type {Promise} HTTP(s) request
 * @param {String} id, mail or username
 * @param {String} password, user password
 * @reject 
 */
export const logIn = (id, password) => (
  client.post("/api/oauth", { id, password })
  .then(response => (
    client.setCredentials(response.data) &&
    // Store the token on the front server cookies
    axios.post("/api/login", response.data)
    .catch( error => console.error( error ))
    // Its error isn't important
    // Client.post error will waterfall out of this function
  ))
  .catch(error => Promise.reject(error.response && error.response.status === 400 ? new ErrorUncomplete(error.response.data) : error))
  .catch(error => Promise.reject(error.response && error.response.status === 401 ? new ErrorLogin(error.response.data) : error))
);
  
  /**
 * @desc Log in with google set JWT token
 * @type {Promise} HTTP(s) request
 * @param {Object} googleResponse
 */
export const googleLogin = (googleResponse) => (
  client
  .setJWT(googleResponse.tokenId)
  .post("/api/oauth/google")
  .then( response => client.setCredentials(response.data))
  .then(client => client.get("/api/oauth"))
  .then( response => console.log(response.data))
  // Where should we manage those errors ?
  // .catch( error => error.response && error.response.state === 401 || Promise.reject(error))
  // .catch( error => console.error(error))
);

/**
 * @desc 
 * @type {Promise} HTTP(s) request
 */
export const logOut = () => {
  client.removeJWT();
  return axios.delete("/api/login");
}

/**
 * @desc 
 * @type {Promise} HTTP(s) request
 */
export const signUp = (fullName, email, password) => (
  client.put("/api/oauth", {fullName, email, password})
  .then( response => (
    client.setCredentials(response.data) &&
    // Store the token on the front server cookies
    axios.post("/api/login", response.data)
    .catch(error => console.error(error))
    // Its error isn't important
    // Client.post error will waterfall out of this function
  ))
  .catch(error => Promise.reject(error.response && error.response.status === 400 ? new ErrorUncomplete(error.response.data) : error))
  .catch(error => Promise.reject(error.response && error.response.status === 401 ? new ErrorLogin(error.response.data) : error))
)

/**
 * @desc fetch data about current user
 * @type {Promise} one or two http request
 * @returns {Object} or null
 */
export const whoAmI = () => (
  Promise.resolve(client.getJWT() ? client : Promise.reject(NO_TOKEN))
  // If the client doesn't have a token, fetch it on the rendering server
  // !! Those data are not to be trusted !!
  .catch( error => error === NO_TOKEN ? (
    axios.get("/api/login")
    .then( response => client.setCredentials(response.data))
  ) : Promise.reject(error))
  // Once the token exists, fetch log data on api
  .then(client => client.get("/api/oauth"))
  .then( response => response.data)
  // On 401, the user isn't logged, remove his JWT;
  .catch( error => error.response && error.response.status === 401 ? client.removeJWT() && null : Promise.reject(error))
);

export const googleLink = () => Promise.resolve();