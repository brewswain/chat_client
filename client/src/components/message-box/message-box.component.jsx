import React from "react";

import "./message-box.styles.scss";

const MessageBox = () => (
  <div className="message-box">
    <div className="message-header">
      <div className="message-name">Name</div>
      <div className="message-timestamp">timestamp</div>
    </div>
    <div className="message-content">
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut architecto
        eius, qui porro aliquid molestias quisquam unde perferendis quo quos.
      </span>
    </div>
  </div>
);

export default MessageBox;
