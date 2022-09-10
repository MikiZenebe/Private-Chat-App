import React from "react";
import { Button } from "@mui/material";

import Miki from "../assets/miki.jpg";

function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">Mik Chat</span>

      <div className="user">
        <img src={Miki} alt="" />
        <span>Micky</span>
        <Button>Logout</Button>
      </div>
    </div>
  );
}

export default Navbar;
