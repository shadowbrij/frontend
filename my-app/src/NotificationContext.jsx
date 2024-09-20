import React, { createContext } from "react";

export const NotificationContext = createContext({
  notifications: [],
  addNotification: () => {},
});

export const NotificationProvider = ({ children }) => {
  // Write your code here
  const [notifications, setNotifications] = React.useState([]);

  const addNotification = (notification) => {
    setNotifications([...notifications, notification]);
  };
  return (<NotificationContext.Provider value={{notifications,addNotification}}>
    {children}
  </NotificationContext.Provider>)
};
