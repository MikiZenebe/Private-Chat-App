import React from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

import firebase from "firebase/app";
import "firebase/auth";
import { auth } from "../firebase";

function Login() {
  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Welcome to Mikchat</h2>

        <div
          className="login-button google"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <FaGoogle /> Sign In with Google
        </div>
        <br />
        <br />
        <div className="login-button facebook">
          <FaFacebookF
            onClick={() =>
              auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
            }
          />{" "}
          Sign In with Facebook
        </div>
      </div>
    </div>
  );
}

export default Login;
