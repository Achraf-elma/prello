import client from './client';

/**
 * @desc Log in api service and set JWT token
 * @type {Promise} HTTP(s) request
 * @param {String} id, mail or username
 * @param {String} password, user password
 * @reject 
 */
export const logIn = (id, password) => {
  client.post("/oauth", { id, password })
  .then(response => client.setJWT(response.data.accessToken))
}

/**
 * @desc Log in with google set JWT token
 * @type {Promise} HTTP(s) request
 * @param {Object} googleResponse
 */
export const googleLogin = (googleResponse) => (
  client
  .setJWT(googleResponse.tokenId)
  .post("/oauth/google")
  .then( response => client.setJWT(response.data.accessToken))
  .then( client => client.get("/oauth"))
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
  return Promise.resolve();
}

/**
 * @desc 
 * @type {Promise} HTTP(s) request
 */
export const signUp = (fullName, email, password) => (
  client.put("/oauth", {fullName, email, password})
  .then( response => client.setJWT(response.data.accessToken))
)

