import React, { useEffect, useState } from "react";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../firebase";
import Default from "../assets/default.png";
import "../pages/Home.scss";

function User({ user1, user, selectUser, chat }) {
  const user2 = user?.uid;

  const [data, setData] = useState("");

  useEffect(() => {
    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;
    let unsub = onSnapshot(doc(db, "lastMsg", id), (doc) => {
      setData(doc.data());
    });
    return () => unsub();
  }, []);

  return (
    <>
      <div
        className={`user-wrapper ${chat.name === user.name && "selected-user"}`}
        onClick={() => selectUser(user)}
      >
        <div className="user-info">
          <div className="user-detail">
            <img src={user.avatar || Default} alt="avatar" className="avatar" />
            <h4>{user.name}</h4>

            {data?.from !== user1 && data?.unread && (
              <small className="unread">New</small>
            )}
          </div>

          <div
            className={`user-status ${user.isOnline ? "online" : "offline"}`}
          ></div>
        </div>
        {data && (
          <p className="truncate">
            <strong>{data.from === user1 ? "You:" : null}</strong>
            {data.text}
          </p>
        )}
      </div>
      <div
        onClick={() => selectUser(user)}
        className={`sm-container ${chat.name === user.name && "selected-user"}`}
      >
        <img
          src={user.avatar || Default}
          alt="avatar"
          className="avatar sm-screen"
        />
      </div>
    </>
  );
}

export default User;
