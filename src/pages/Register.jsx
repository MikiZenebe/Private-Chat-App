import React from "react";
import { Input, Button } from "@mui/material";

import "./Register.scss";

function Register() {
  return (
    <section>
      <h3>Create an account</h3>
      <form className="form">
        <div className="input__container">
          <Input type="text" name="name" placeholder="Name" />
          <Input type="email" name="email" placeholder="Email" />{" "}
          <Input type="password" name="password" placeholder="Password" />
          <Button>Register</Button>
        </div>
      </form>
    </section>
  );
}

export default Register;
