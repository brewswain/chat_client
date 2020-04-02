import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/home/home.component";
import ChatPage from "./pages/chat/chat.component";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/chat" component={ChatPage} />
      </Switch>
    </div>
  );
}

export default App;
