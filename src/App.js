import "./App.css";

import React, { useState } from "react";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleThemeSwitch = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const themeStyle = {
    backgroundColor: isDarkTheme ? "black" : "white",
    color: isDarkTheme ? "white" : "black",
  };

  return (
    <div className="App" style={themeStyle}>
      <h1>click for change theme</h1> 
      <button onClick={handleThemeSwitch}>click</button>
    </div>
  );
}

export default App;