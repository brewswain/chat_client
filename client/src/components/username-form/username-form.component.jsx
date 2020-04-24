import React, { useReducer, useEffect } from "react";
import { withRouter } from "react-router-dom";

import { initialState, reducer } from "../../reducer/reducer";

import "./username-form.styles.scss";

const UsernameForm = ({ history, userNameData }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("persistedUserName", JSON.stringify(state));
  });

  const handleKeyPress = async (event) => {
    if (event.key === "Enter") {
      await dispatch({ type: "SET_USERNAME", payload: event.target.value });
      history.push("/chat");
    }
  };

  return (
    <div className="form-container">
      <div className="form-information">
        <label for="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          class="form-input"
          onKeyPress={handleKeyPress}
          placeholder="Please enter name"
          required
        />
        {""}
      </div>
    </div>
  );
};

export default withRouter(UsernameForm);
