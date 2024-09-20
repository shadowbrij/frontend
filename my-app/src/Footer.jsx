import React from "react";
import { useContext } from "react";
import { NotificationContext } from "./NotificationContext";

function Footer() {
  const { notifications } = useContext(NotificationContext);
  return (
    <div>
      {notifications.map((note, idx) => (
        <div key={idx}>{note} : Footer</div>
      ))}
    </div>
  );
}

export default Footer;
