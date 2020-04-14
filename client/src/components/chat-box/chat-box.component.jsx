import React, { useState } from "react";

import MessageBox from "../message-box/message-box.component";

import io from "socket.io-client";

import "./chat-box.styles.scss";

const ChatBox = ({ parsedUserData }) => {
  const [messageBody, setMessageBody] = useState([]);

  let chatMessages = [];

  const socket = io();

  socket.on("welcome", (welcome) => {
    console.log(welcome);
  });

  socket.on("userJoined", (userJoined) => {
    console.log(userJoined);

    socket.on("userLeft", (userLeft) => {
      console.log(userLeft);
    });
  });

  socket.on("message", async (message) => {
    await setMessageBody([
      ...messageBody,
      {
        id: messageBody.length,
        value: message,
      },
    ]);
    console.log(messageBody);
    // console.log(message);
    // outputMessage(message);
    // chatMessages.push(message);
  });

  // const outputMessage = async (message) => {
  //   if (message) {
  //   }
  //   return;
  // };

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
          {messageBody.map((msg) => (
            <MessageBox
              parsedUserData={parsedUserData}
              messageBody={messageBody.value}
              key={messageBody.id}
            />
          ))}
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
