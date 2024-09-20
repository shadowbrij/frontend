import React from "react";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import { NotificationProvider } from "./NotificationContext";

function AppNotification() {
  return (
    <div>
        <NotificationProvider>
            <Dashboard/>
            <Footer/>
      </NotificationProvider>
    </div>
  );
}

export default AppNotification;
