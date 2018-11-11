// Modules
import io from 'socket.io-client';

// Fall back
import client from './client';
import {dispatchAction} from './action';

// Config
import { API_HOST } from '../config.json';

export const socketConnection = {
  _instance: null,
  get instance() {
    if (!this._instance) {
      this._instance = io(API_HOST, {policyPort:8080});
      this._instance.on('connect', () => (
        this._instance.emit('authentication', client.credentials && client.credentials.accessToken)
      ));
    }
    return this._instance;
  }
}

export const socketDispatch = param => next => action => {
  console.log(param, next, action);
  if (!action.socketAction) {
    let socketAction = ({
      socketAction: true,
      member: client.me,
      ...action
    })
    if (socketConnection.instance && socketConnection.instance.connected ){
      socketConnection.instance.emit("dispatch", socketAction);
    } else {
      // Fall back to classique API
      dispatchAction(socketAction)
      .catch(error => console.error(error));
    }
  } 
  return next(action);
};