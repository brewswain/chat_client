import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import io from "socket.io-client";

import { initialState, reducer } from "../../reducer/reducer";

import ChatBox from "../../components/chat-box/chat-box.component";

import "./chat.styles.scss";
import HomePage from "../home/home.component";

const ChatPage = ({ userNameData }) => {
  const retrievedUserData = localStorage.getItem("persistedUserName");
  const parsedUserData = JSON.parse(retrievedUserData);

  useEffect(() => {
    const socket = io();
    socket.on("message", message => {
      console.log(message);
    });
  }, []);

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
      <ChatBox />
    </div>
  );
};

export default withRouter(ChatPage);
