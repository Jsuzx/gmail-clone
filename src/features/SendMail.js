import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import "./SendMail.css";

function SendMail() {
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>message</h3>
        <Close className="sendMail__close" />
      </div>
      <form>
        <input placeholder="To" type="text" />
        <input placeholder="Subject" type="text" />
        <input
          placeholder="Message...."
          type="text"
          className="sendMail__message"
        />

        <div className="sendMail__options">
          <Button className="sendMail__send">Send</Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
