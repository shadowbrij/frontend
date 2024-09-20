import React from "react";
import UserSettings from "./UserSettings";
import Profile from "./Profile";
import { SettingsProvider } from "./SettingsContext";
import { CommentBox } from "./CommentBox";
import Counter from "./Counter";
function App() {
  const [theme, setTheme] = React.useState("light");
  const [language, setLanguage] = React.useState("English");
  // const profileSettings = {
  //   theme:theme,
  //   setTheme:setTheme,
  //   language:language,
  //   setLanguage:setLanguage
  // }
    const profileSettings = {};
  profileSettings.theme = theme;
  profileSettings.setTheme = setTheme;
  profileSettings.language = language;
  profileSettings.setLanguage = setLanguage;
  return (
    <div>
      <SettingsProvider profileSettings={profileSettings}>
      <UserSettings/>
      <Profile/>
      </SettingsProvider>
      <CommentBox></CommentBox>
      <Counter></Counter>
    </div>
  );
}

export default App;
