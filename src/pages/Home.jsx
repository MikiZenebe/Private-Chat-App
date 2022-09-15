import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import User from "../components/User";
import "./Home.scss";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const userRef = collection(db, "users");

    //Create query objects
    const q = query(userRef, where("uid", "not-in", [auth.currentUser.uid]));

    //Execute the query
    const unsub = onSnapshot(q, (querySnapshot) => {
      let users = [];
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
      setUsers(users);
    });
    return () => unsub();
  }, []);

  const selectUser = (user) => {
    console.log(user);
  };

  return (
    <div className="home-container">
      <div className="users-container">
        {users.map((user) => (
          <User key={user.uid} user={user} selectUser={selectUser} />
        ))}
      </div>
    </div>
  );
}

export default Home;
