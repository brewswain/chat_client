import React, { useReducer } from "react";

import { initialState, reducer } from "../../reducer/reducer";

import ChatBox from "../../components/chat-box/chat-box.component";

import "./chat.styles.scss";

const ChatPage = ({ userNameData }) => {
  const retrievedUserData = localStorage.getItem("persistedUserName");
  const parsedUserData = JSON.parse(retrievedUserData);
  console.log(parsedUserData.username);

  const [state] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Hi, {parsedUserData.username}</h1>
      <ChatBox />
    </div>
  );
};

export default ChatPage;
