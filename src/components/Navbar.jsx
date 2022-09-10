import React from "react";
import { Button } from "@mui/material";

function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">Mik Chat</span>

      <div className="user">
        <img src="" alt="" />
        <span>Micky</span>
        <Button>Logout</Button>
      </div>
    </div>
  );
}

export default Navbar;
