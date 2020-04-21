import React from "react";

import "./message-box.styles.scss";

const MessageBox = ({
  serverUserName,
  messageBody,
  clientUserName,
  isClient,
}) => (
  <div className="message-box">
    {messageBody ? (
      <div className="message-header">
        <div className="message-name">
          {isClient ? serverUserName : clientUserName}
        </div>
        <div className="message-timestamp">timestamp</div>
      </div>
    ) : null}

    <div className="message-content">
      <span>{messageBody}</span>
    </div>
  </div>
);

export default MessageBox;
