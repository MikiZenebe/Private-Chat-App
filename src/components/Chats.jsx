import React, { useRef, useEffect, useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";
import { useAuth } from "../contexts/AuthContext";

function Chats() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { user } = useAuth();

  const logoutHandler = async () => {
    await auth.signOut();

    navigate("/");
  };

  //Users Photo
  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();

    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }

    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "3a51c35f-8b19-4248-a57e-87cd2b0520af",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formData = new FormData();
        formData.append("email", user.email);
        formData.append("username", user.displayName);
        formData.append("secret", user.uid);

        getFile(user.photoUrl).then((avatar) => {
          formData.append("avatar", avatar, avatar.name);

          axios.post("https://api.chatengine.io/users",
          formData,
          {headers: {"private-key":}});
        });
      });
  }, [user, navigate]);

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
