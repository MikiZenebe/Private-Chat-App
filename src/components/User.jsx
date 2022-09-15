import React from "react";
import Default from "../assets/default.png";
import "../pages/Home.scss";

function User({ user, selectUser }) {
  return (
    <div className="user-wrapper" onClick={() => selectUser(user)}>
      <div className="user-info">
        <div className="user-detail">
          <img src={user.avatar || Default} alt="avatar" className="avatar" />
          <h4>{user.name}</h4>
        </div>

        <div
          className={`user-status ${user.isOnline ? "online" : "offline"}`}
        ></div>
      </div>
    </div>
  );
}

export default User;
