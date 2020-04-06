const express = require("express");
const http = require("http");
const path = require("path");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname, "client/build")));

io.on("connection", (socket) => {
  socket.emit("message", "Welcome to our chat!");

  // broadcast to everybody but the client that connects
  socket.broadcast.emit("message", "A user has connected to the chat");

  socket.on("disconnect", () => {
    //io.emit is a global broadcast method
    io.emit("message", "A user has disconnected");
  });
});

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));