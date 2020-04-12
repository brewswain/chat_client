import React from "react";

import "./message-box.styles.scss";

const MessageBox = ({ parsedUserData, messageBody }) => (
  <div className="message-box">
    {messageBody ? (
      <div className="message-header">
        <div className="message-name">{parsedUserData.username}</div>
        <div className="message-timestamp">timestamp</div>
      </div>
    ) : null}

    <div className="message-content">
      <span>{messageBody}</span>
    </div>
  </div>
);

export default MessageBox;
