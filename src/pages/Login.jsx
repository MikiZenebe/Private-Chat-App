import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, Alert } from "@mui/material";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { updateDoc, doc } from "firebase/firestore";

import "./Register.scss";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
    error: null,
    loading: false,
  });

  const navigate = useNavigate();

  const { email, password, error, loading } = data;

  //Hold data in the input
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  //Submit data from input
  const submitHandler = async (e) => {
    e.preventDefault();

    //Check if the inputs are filled
    if (!email || !password) {
      setData({
        ...data,
        error: <Alert severity="error">All fields are required!</Alert>,
      });
    }

    // LogIn with existing user
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);

      //Pick the user from Database
      await updateDoc(doc(db, "users", result.user.uid), {
        isOnline: true,
      });
      setData({
        email: "",
        password: "",
        error: null,
        loading: false,
      });

      //Redirect to homepage when the login button clicked
      navigate("/");
    } catch (error) {
      setData({
        ...data,
        error: (
          <Alert severity="error">Make sure your email & password match</Alert>
        ),
        loading: false,
      });
    }
  };
  return (
    <div>
      <section>
        <h3>Log into your account</h3>
        <form className="form" onSubmit={submitHandler}>
          <div className="input__container">
            <Input
              type="email"
              name="email"
              value={email}
              onChange={changeHandler}
              placeholder="Email"
            />{" "}
            <Input
              type="password"
              name="password"
              value={password}
              onChange={changeHandler}
              placeholder="Password"
              autoComplete="current-password"
            />
            {/* Display the error */}
            {error ? <p>{error}</p> : null}
            <div>
              <Button type="submit" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </Button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Login;
