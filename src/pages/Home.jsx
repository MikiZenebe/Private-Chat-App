import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import User from "../components/User";
import "./Home.scss";
import MessageForm from "../components/MessageForm";

function Home() {
  const [users, setUsers] = useState([]);
  const [chat, setChat] = useState("");
  const [text, setText] = useState("");

  const user1 = auth.currentUser.uid;

  useEffect(() => {
    const userRef = collection(db, "users");

    //Create query objects
    const q = query(userRef, where("uid", "not-in", [user1]));

    //Execute the query
    const unsub = onSnapshot(q, (querySnapshot) => {
      let users = [];
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
      setUsers(users);
    });
    return () => unsub();
  }, [user1]);

  const selectUser = (user) => {
    setChat(user);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const user2 = chat.uid;

    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;

    await addDoc(collection(db, "messages", id, "chat"), {
      text,
      from: user1,
      to: user2,
      createdAt: Timestamp.fromDate(new Date()),
    });
    setText("");
  };

  return (
    <div className="home-container">
      <div className="users-container">
        {users.map((user) => (
          <User key={user.uid} user={user} selectUser={selectUser} />
        ))}
      </div>

      <div className="messages-container">
        {chat ? (
          <>
            <div className="messages-user">
              <h3>{chat.name}</h3>
            </div>
            <MessageForm
              submitHandler={submitHandler}
              text={text}
              setText={setText}
            />
          </>
        ) : (
          <h3 className="no-chat">Select a user to chat</h3>
        )}
      </div>
    </div>
  );
}

export default Home;
