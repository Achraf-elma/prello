// Modules
import io from 'socket.io-client';

let currentSocket;

/**
 * 
 * Dispatch middleware
 */
export const socketDispatch = param => next => action => {
  if (currentSocket && currentSocket.connected && !action.fromSocket ) { 
    let socketAction = ({
      fromSocket: true,
      ...action
    })
    currentSocket.emit("dispatch", socketAction ) ;
  }
  return next(action);
}

export const socket = () => currentSocket;

export const socketConnect = (...params) => {
  currentSocket = io.connect(...params);
  return currentSocket;
}