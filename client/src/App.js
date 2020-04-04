import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/home/home.component";
import ChatPage from "./pages/chat/chat.component";

function App() {
  const userNameData = localStorage.getItem("persistedUserName");
  const parsedUserData = JSON.parse(userNameData);

  // const [socketState, setSocketState] = useState({
  //   response: false,
  //   endpoint: "https://127.0.0.1:3000"
  // });

  // useEffect(() => {
  //   const socket = io();
  // }, []);

  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          // render={() =>
          //   parsedUserData ? <Redirect to="/chat" /> : <HomePage />
          // }
          component={HomePage}
        />
        <Route exact path="/chat" component={ChatPage} />
      </Switch>
    </div>
  );
}

export default App;
