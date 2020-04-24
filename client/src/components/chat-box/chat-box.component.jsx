import React, { useState, useEffect } from "react";

import MessageBox from "../message-box/message-box.component";

import io from "socket.io-client";
import shortid from "shortid";

import "./chat-box.styles.scss";

const ChatBox = ({ parsedUserData }) => {
  const [messageBody, setMessageBody] = useState([]);

  const clientUserName = parsedUserData.username;

  const socket = io();
  // const messageBody = [];

  socket.on("welcome", (welcome) => {});

  socket.on("userJoined", (userJoined) => {
    socket.on("userLeft", (userLeft) => {});
  });

  useEffect(() => {
    socket.on("message", (message) => {
      setMessageBody(
        ...messageBody,
        {
          id: message.id,
          value: message.clientMessage,
          name: message.name,
        },
      );
    });
    console.log(messageBody);
  }, [messageBody, socket]);

  // socket.on("message", (message) => {
  //   messageBody.push({
  //     id: message.id,
  //     value: message.clientMessage,
  //     name: message.name,
  //   });
  //   console.log(messageBody);
  //   // messageBody.forEach((element) =>
  //   // // console.log(element.id)

  //   // );

  //   messageBody.map((testElement) => {
  //     console.log(testElement.id);
  //     console.log(testElement.value);
  //     console.log(testElement.name);
  //   });
  // });

  const handleKeyPress = (event) => {
    const msg = event.target.value;
    if (event.key === "Enter") {
      socket.emit("chatMessage", {
        clientMessage: msg,
        name: clientUserName,
        id: shortid.generate(),
      });
    }
  };

  return (
    <div className="chat-box">
      <div className="chat-body">
        <div className="chat-log">
          {messageBody.map((serverMessage) => (
            <MessageBox
              serverUserName={serverMessage.name}
              messageBody={serverMessage.value}
              key={serverMessage.id}
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
