import React from "react";
import { Input, Button } from "@mui/material";
import { MdAddPhotoAlternate } from "react-icons/md";
function Login() {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        {/* <img src={Logo} alt="logo" /> */}
        <span className="logo">Mik Chat</span>
        <span className="title">Login</span>

        <form>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />

          <Button variant="contained">Log In</Button>
        </form>

        <p>Don't have an account? Register</p>
      </div>
    </div>
  );
}

export default Login;
