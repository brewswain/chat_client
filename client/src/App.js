import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/home/home.component";
import ChatPage from "./pages/chat/chat.component";

function App() {
  const userNameData = localStorage.getItem("persistedUserName");
  const parsedUserData = JSON.parse(userNameData);

  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            parsedUserData ? <Redirect to="/chat" /> : <HomePage />
          }
        />
        <Route path="/chat" component={ChatPage} />
      </Switch>
    </div>
  );
}

export default App;
