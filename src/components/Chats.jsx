import React from "react";

import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";
import { useAuth } from "../contexts/AuthContext";

function Chats() {
  const navigate = useNavigate();
  const { user } = useAuth();

  console.log(user);

  const logoutHandler = async () => {
    await auth.signOut();

    navigate("/");
  };
  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">Mikchat</div>

        <div className="logout-tab" onClick={logoutHandler}>
          Logout
        </div>
      </div>

      <ChatEngine
        height="calc(100vh - 66px)"
        projectId="
      3a51c35f-8b19-4248-a57e-87cd2b0520af"
        userName="."
        userSecret="."
      />
    </div>
  );
}

export default Chats;
