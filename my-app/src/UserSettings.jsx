import React from "react";
import { useContext } from "react";
import { SettingsContext } from "./SettingsContext";

function UserSettings() {
  const {theme, language, setTheme, setLanguage} = useContext(SettingsContext);
  return (
    <div>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
      <button
        onClick={() =>
          setLanguage(language === "English" ? "Spanish" : "English")
        }
      >
        Toggle Language
      </button>
    </div>
  );
}

export default UserSettings;
