import React from "react";
import { GrAttachment } from "react-icons/gr";
import { IoMdSend } from "react-icons/io";
import { Button } from "@mui/material";
import "../pages/Home.scss";

function MessageForm({ submitHandler, text, setText }) {
  return (
    <form className="message-form" onSubmit={submitHandler}>
      <label htmlFor="img">
        <GrAttachment cursor="pointer" fill="#F09819" />
      </label>
      <input
        type="file"
        accept="image/*"
        id="img"
        style={{ display: "none" }}
      />

      <div>
        <input
          type="text"
          placeholder="Enter Message"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div>
        <Button className="btn" type="submit">
          <IoMdSend size={20} fill="#F09819" />
        </Button>
      </div>
    </form>
  );
}

export default MessageForm;
