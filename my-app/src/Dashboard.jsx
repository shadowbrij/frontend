import React from "react";
import { useContext } from "react";
import { NotificationContext } from "./NotificationContext";

function Dashboard() {
  const { notifications, addNotification } = useContext(NotificationContext);
  return (
    <div>
      <button onClick={() => addNotification("New alert from Dashboard!")}>
        Add Dashboard Alert
      </button>
      {notifications.map((note, idx) => (
        <p key={idx}>{note}</p>
      ))}
    </div>
  );
}

export default Dashboard;
