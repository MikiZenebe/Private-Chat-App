import React from "react";
import Moment from "react-moment";
import "../pages/Home.scss";

function Message({ msg, user1 }) {
  return (
    <div className={`message-wrapper ${msg.from === user1 ? "own" : ""}`}>
      <p className={msg.from === user1 ? "me" : "friend"}>
        {msg.media ? <img src={msg.media} alt={msg.text} /> : null}
        {msg.text}
        <br />
        <small>
          <Moment fromNow>{msg.createdAt.toDate()}</Moment>
        </small>
      </p>
    </div>
  );
}

export default Message;
