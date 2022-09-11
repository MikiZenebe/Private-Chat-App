import React from "react";
import Reta from "../assets/reta.jpg";

function Chats() {
  return (
    <div className="chats">
      <div className="user-chat">
        <img src={Reta} alt="" />
        <div className="user-chatInfo">
          <span>Micky Reta</span>
          <p>Sup, gamers 👋</p>
        </div>
      </div>

      <div className="user-chat">
        <img src={Reta} alt="" />
        <div className="user-chatInfo">
          <span>Micky Reta</span>
          <p>Sup, gamers 👋</p>
        </div>
      </div>

      <div className="user-chat">
        <img src={Reta} alt="" />
        <div className="user-chatInfo">
          <span>Micky Reta</span>
          <p>Sup, gamers 👋</p>
        </div>
      </div>
    </div>
  );
}

export default Chats;
