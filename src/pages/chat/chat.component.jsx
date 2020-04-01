import React, { useReducer } from "react";

import { initialState, reducer } from "../../reducer/reducer";

import "./chat.styles.scss";

const ChatPage = () => {
  const [state] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Hi, {state.username}</h1>
    </div>
  );
};

export default ChatPage;
