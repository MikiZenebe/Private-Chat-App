import React from "react";
import { Input, Button } from "@mui/material";
import { MdAddPhotoAlternate } from "react-icons/md";

// import Logo from "../assets/logo.png";
function Register() {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        {/* <img src={Logo} alt="logo" /> */}
        <span className="logo">Mik Chat</span>
        <span className="title">Register</span>

        <form>
          <Input type="text" placeholder="Display name" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />

          <Input style={{ display: "none" }} id="file" type="file" />
          <label htmlFor="file">
            <MdAddPhotoAlternate fill="#3a7bd5" size={25} />
            <span>Add Profile Picture</span>
          </label>

          <Button variant="contained">Sign up</Button>
        </form>

        <p>Have an account? Login</p>
      </div>
    </div>
  );
}

export default Register;
