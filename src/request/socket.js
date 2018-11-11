// Modules
import io from 'socket.io-client';

export const socketConnection = {
  _instance: null,
  get instance() {
    if (!this._instance) {
      this._instance = io();
    }
    return this._instance;
  }
}

export const socketDispatch = param => next => action => {
  if (socketConnection && socketConnection.connected ){
    if (!action.localDispatch) {
      let socketAction = ({
        localDispatch: true,
        ...action
      })
      socketConnection.emit("dispatch", socketAction);
    }
    return next(action);
  } else {
    return next(action);
  }
};