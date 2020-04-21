const express = require("express");
const http = require("http");
const path = require("path");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", function (req, res) {
  res.sendfile("./client/build/index.html");
});

io.on("connection", (socket) => {
  socket.emit("welcome", "Welcome to our chat!");

  // broadcast to everybody but the client that connects
  socket.broadcast.emit("userJoined", "A user has connected to the chat");

  socket.on("disconnect", () => {
    //io.emit is a global broadcast method
    io.emit("userLeft", "A user has disconnected");
  });

  socket.on("chatMessage", (msg) => {
    io.emit("message", msg);
  });

  socket.on("userName", (clientUserName) => {
    const socketUserName = clientUserName;
    io.emit("userName", socketUserName);
  });
});

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
