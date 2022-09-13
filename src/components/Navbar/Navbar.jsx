import React, { useContext } from "react";

import { Button } from "@mui/material";

import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";
import { signOut } from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";

import { AuthContext } from "../../context/auth";

import "./Navbar.scss";

function Navbar() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  //Logout the user when logout button clicked
  const SignOutHandler = async () => {
    await updateDoc(doc(db, "users", auth.currentUser.uid), {
      isOnline: false,
    });
    await signOut(auth);

    navigate("/login");
  };
  return (
    <nav>
      <h3>
        <Link to="/">Mikngeer</Link>
      </h3>

      <div>
        {user ? (
          <>
            <Link to="/profile">Profile</Link>
            <Button className="btn" onClick={SignOutHandler}>
              Logout
            </Button>
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
