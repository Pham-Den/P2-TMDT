let io;
const socket = require("socket.io");

module.exports = {
  init: (httpServer) => {
    io = new socket.Server(httpServer, {
      cors: {
        origin: [
          "http://localhost:3000",
          "http://localhost:3001",
          "https://p2-tmdt-client-demo.web.app",
          "https://p2-tmdt-admin-demo.web.app",
        ],
        allowedHeaders: ["tmdt-chat-header"],
        methods: ["GET", "POST"],
        credentials: true,
      },
    });
    return io;
  },
  getIO: () => {
    if (!io) {
      throw new Error("Socket.io not initialized!");
    }
    return io;
  },
};
