import React from "react";
import { Input } from "@mui/material";

import Reta from "../assets/reta.jpg";

function Search() {
  return (
    <div className="search">
      <div className="search-form">
        <Input type="text" placeholder="Find a user" />
      </div>

      <div className="user-chat">
        <img src={Reta} alt="" />
        <div className="user-chatInfo">
          <span>Miki Reta</span>
        </div>
      </div>
    </div>
  );
}

export default Search;
