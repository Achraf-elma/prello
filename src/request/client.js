// Modules
import axios from 'axios';

// config
import { API_HOST, TIMEOUT} from '../config.json';

// https://github.com/axios/axios#creating-an-instance

// Singleton
const client = axios.create({
  baseURL: API_HOST,
  timeout: TIMEOUT,
  maxRedirects:1,
})


// https://github.com/axios/axios#creating-an-instance
/**
 * @desc Set the authorization header to Json Web Token protocol
 * @type {Function} synchronous
 * @param {String} token, "bearer xxxx" Json Web Token
 * @return self
 */
client.setJWT = (token) => {
  client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  return client;
}

/**
 * @desc Get the Json Web Token
 * @type {Function} synchronous
 * @return Json Web Token or undefined
 */
client.getJWT = (token) => {
  const bearerToken = client.defaults.headers.common['Authorization'];
  return bearerToken && bearerToken.replace(/Bearer /, "");
}


/**
 * @desc remove the authentification to Json Web Token protocol
 * @type {Function} synchronous
 * @return self
 */
client.removeJWT = () => {
  client.defaults.headers.common['Authorization'] = null;
  return client;
}

/**
 * 
 */
client.setCredentials = (credentials) => {
  client.me = credentials.idUser;
  client.credentials = credentials;
  client.setJWT(credentials.accessToken);
  return client;
}

client.setCredentials({
  "accessToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZFVzZXIiOiI1YmVlZDliNDMyNjIxMjA3OTAzYTkyNWUiLCJlbWFpbCI6Im5vbiIsImV4cGlyZXMiOjIuMzc4OTM1OTI4ODQ2MzkzMmUrMjR9.62l_dJ2c9v1v08f39YesoH_oOSezBzZrcOezWoZ-NgM",
  "idUser": "5beed9b432621207903a925e",
  "email": "non",
  "expires": 2.3789359288463932e+24
 });

client.getCredentials = () => {
  return client.credentials;
}

client.removeCredentials = () => {
  client.credentials = null;
  client.me = null;
  client.removeJWT();
  return client;
}

export default client;