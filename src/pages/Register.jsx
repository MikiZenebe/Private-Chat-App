import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, Alert } from "@mui/material";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { setDoc, doc, Timestamp } from "firebase/firestore";

import "./Register.scss";

function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    error: null,
    loading: false,
  });

  const navigate = useNavigate();

  const { name, email, password, error, loading } = data;

  //Hold data in the input
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  //Submit data from input
  const submitHandler = async (e) => {
    e.preventDefault();

    //Check if the inputs are filled
    if (!name || !email || !password) {
      setData({
        ...data,
        error: <Alert severity="error">All fields are required!</Alert>,
      });
    }

    // Register a new user
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      //Add the registerd user to Database
      await setDoc(doc(db, "users", result.user.uid), {
        uid: result.user.uid,
        name,
        email,
        createdAt: Timestamp.fromDate(new Date()),
        isOnline: true,
      });
      setData({
        name: "",
        email: "",
        password: "",
        error: null,
        loading: false,
      });

      //Redirect to homepage when the register button clicked
      navigate("/");
    } catch (error) {}
  };
  return (
    <section>
      <h2>Welcome to Mikngger </h2>
      <h3>Create an account</h3>
      <form className="form" onSubmit={submitHandler}>
        <div className="input__container">
          <Input
            type="text"
            name="name"
            value={name}
            onChange={changeHandler}
            placeholder="Name"
          />
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
            placeholder="Password (Minimum 6 characters)"
          />
          {/* Display the error */}
          {error ? <p>{error}</p> : null}
          <div>
            <Button type="submit" disabled={loading}>
              {loading ? "Creating" : "Register"}
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Register;
