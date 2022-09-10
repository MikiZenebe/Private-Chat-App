import React from "react";
import Reta from "../assets/reta.jpg";

function Chats() {
  return (
    <div className="chats">
      <div className="user-chat">
        <img src={Reta} alt="" />

        <div className="user-chatInfo">
          <span>Micky</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
}

export default Chats;
