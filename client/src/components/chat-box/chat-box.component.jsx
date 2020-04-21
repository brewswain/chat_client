import React, { useState, useEffect } from "react";

import MessageBox from "../message-box/message-box.component";

import io from "socket.io-client";

import "./chat-box.styles.scss";

const ChatBox = ({ parsedUserData }) => {
  const [messageBody, setMessageBody] = useState([]);
  const [serverUserName, setServerUserName] = useState("");

  const clientUserName = parsedUserData.username;
  let isClient = true;

  const socket = io();

  socket.on("welcome", (welcome) => {
    // console.log(welcome);
  });

  socket.on("userJoined", (userJoined) => {
    console.log(userJoined);

    socket.on("userLeft", (userLeft) => {
      console.log(userLeft);
    });
  });

  useEffect(() => {
    socket.on("message", (message) => {
      setMessageBody([
        ...messageBody,
        {
          id: messageBody.length,
          value: message,
        },
      ]);
    });
  }, [messageBody, socket]);

  useEffect(() => {
    socket.on("userName", (socketUserName) => {
      if ((socketUserName = clientUserName)) {
        setServerUserName(socketUserName);
        return;
      } else {
        isClient = false;
        return;
      }
    });
  }, [serverUserName, socket]);

  const handleKeyPress = (event) => {
    const msg = event.target.value;
    if (event.key === "Enter") {
      socket.emit("chatMessage", msg) &&
        socket.emit("userName", clientUserName);

      isClient = true;
    }
  };

  return (
    <div className="chat-box">
      <div className="chat-body">
        <div className="chat-log">
          {messageBody.map((msg) => (
            <MessageBox
              serverUserName={serverUserName}
              clientUserName={clientUserName}
              isClient={isClient}
              messageBody={msg.value}
              key={msg.id}
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
