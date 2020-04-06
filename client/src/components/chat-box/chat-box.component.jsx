import React from "react";

import "./chat-box.styles.scss";

const ChatBox = () => {
  const userNameData = localStorage.getItem("persistedUserName");
  const parsedUserData = JSON.parse(userNameData);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log("I fired");
    }
  };
  return (
    <div className="chat-box">
      <div className="chat-body">
        <div className="chat-log">Beep</div>
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
