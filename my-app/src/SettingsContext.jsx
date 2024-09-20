import React from "react";

export const SettingsContext = React.createContext({});

export const SettingsProvider = ({ profileSettings,children }) => {
  // Write your code here
  return (<SettingsContext.Provider value={profileSettings}>
            {children}
          </SettingsContext.Provider>);
};
