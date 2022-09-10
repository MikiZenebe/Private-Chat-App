import React from "react";
import { Input } from "@mui/material";

import Reta from "../assets/reta.jpg";

function Search() {
  return (
    <div className="search">
      <div className="search-form">
        <Input placeholder="Find a user" />
      </div>

      <div className="user-chat">
        <img src={Reta} alt="" />

        <div className="user-chatInfo">
          <span>Micky</span>
        </div>
      </div>
    </div>
  );
}

export default Search;
