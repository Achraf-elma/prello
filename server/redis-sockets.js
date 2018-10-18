// Modules
const socketServer = require('socket.io');
const redis = require("socket.io-redis");

const socketEvents = {
  connection: "connection",
  disconnect: "disconnect",
  dispatch  : "dispatch",
}

const boardDisptach = (socket, action) => {
  socket.broadcast.emit("dispatch", action);
};

// Functions
module.exports = (httpServer) => {
  const io = socketServer(httpServer);
  
  io.adapter(redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  }));
  
  io.on(socketEvents.connection,(socket) => {
    // add to socket pools
    console.log("New socket:", socket.id);
    
    socket.on(socketEvents.disconnect, () => {
      // Remove from socket pool
      console.log('Socket out:', socket.id)
    });

    socket.on(socketEvents.dispatch, (action) => boardDisptach(socket, action));
  });
}