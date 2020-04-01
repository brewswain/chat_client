import React, { useReducer, useEffect } from "react";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";

import { initialState, reducer } from "../../reducer/reducer";

import "./username-form.styles.scss";

const UsernameForm = ({ history }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="form-container">
      <div className="form-information">
        <label for="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          class="form-input"
          onBlur={event =>
            dispatch({ type: "SET_USERNAME", payload: event.target.value })
          }
          required
        />{" "}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/chat");
        }}
      >
        Join Chat
      </CustomButton>
    </div>
  );
};

export default withRouter(UsernameForm);
