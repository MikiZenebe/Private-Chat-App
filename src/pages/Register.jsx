import React, { useState } from "react";
import { Input, Button, Alert } from "@mui/material";

import "./Register.scss";

function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    error: null,
    loading: false,
  });

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
  };
  return (
    <section>
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
            placeholder="Password"
          />
          {/* Display the error */}
          {error ? <p>{error}</p> : null}
          <div>
            <Button type="submit">Register</Button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Register;
