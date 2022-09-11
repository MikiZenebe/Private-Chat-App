import React from "react";
import Messages from "./Messages";
import Input from "./Input";

function Chat() {
  return (
    <div className="chat">
      <div className="chat-info">
        <span> Micky Reta</span>
      </div>

      <div>
        <Messages />
        <Input />
      </div>
    </div>
  );
}

export default Chat;
