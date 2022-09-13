import React, { useContext } from "react";

import { Button } from "@mui/material";

import { Link } from "react-router-dom";
import { auth, db } from "../../firebase";
import { signOut } from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";

import { AuthContext } from "../../context/auth";

import "./Navbar.scss";

function Navbar() {
  const { user } = useContext(AuthContext);

  //Logout the user when logout button clicked
  const SignOutHandler = async () => {
    await updateDoc(doc(db, "users", auth.currentUser.uid), {
      isOnline: false,
    });
    await signOut(auth);
  };
  return (
    <nav>
      <h3>
        <Link to="/">Mik Chat</Link>
      </h3>

      <div>
        {user ? (
          <>
            <Link to="/profile">Profile</Link>
            <Button onClick={SignOutHandler}>Logout</Button>
          </>
        ) : (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
