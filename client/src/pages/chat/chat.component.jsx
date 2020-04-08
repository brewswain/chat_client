import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import io from "socket.io-client";

import ChatBox from "../../components/chat-box/chat-box.component";

import "./chat.styles.scss";

const ChatPage = () => {
  const retrievedUserData = localStorage.getItem("persistedUserName");
  const parsedUserData = JSON.parse(retrievedUserData);

  return (
    <div className="chatpage-container">
      <h1 className="chatpage-title">
        {parsedUserData ? (
          <span>Hi, {parsedUserData.username}</span>
        ) : (
          <span>No username Chosen </span>
        )}
        <span onClick={() => localStorage.clear()}>
          <Link to="/" className="redirection-link">
            {" "}
            <span className="chatpage-subtitle">
              {parsedUserData ? (
                <span> - Want to change your name?</span>
              ) : (
                <span>Please choose a name here</span>
              )}
            </span>
          </Link>
        </span>
      </h1>
      <ChatBox parsedUserData={parsedUserData} />
    </div>
  );
};

export default withRouter(ChatPage);
