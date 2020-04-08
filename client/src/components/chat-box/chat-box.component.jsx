import React from "react";

import MessageBox from "../message-box/message-box.component";

import io from "socket.io-client";

import "./chat-box.styles.scss";

const ChatBox = ({ parsedUserData }) => {
  const socket = io();

  socket.on("message", (message) => {
    console.log(message);
    outputMessage(message);
  });

  const outputMessage = (message) => {};

  const handleKeyPress = (event) => {
    const msg = event.target.value;
    if (event.key === "Enter") {
      socket.emit("chatMessage", msg);
    }
  };
  return (
    <div className="chat-box">
      <div className="chat-body">
        <div className="chat-log">
          <MessageBox parsedUserData={parsedUserData} />

          <MessageBox parsedUserData={parsedUserData} />
        </div>
        <div className="user-list">
          <div className="user-list-header">Users</div>
          <div className="user-list-names">
            {parsedUserData ? (
              <span> {parsedUserData.username}</span>
            ) : (
              <span> </span>
            )}
          </div>
        </div>
      </div>
      <div className="input-container">
        <input
          type="text"
          className="chat-input"
          id="message"
          placeholder="Type a message"
          onKeyPress={handleKeyPress}
        />
      </div>
    </div>
  );
};

export default ChatBox;
