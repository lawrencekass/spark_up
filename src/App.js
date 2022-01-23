import React, { useState } from "react";
import './App.css';
import PageRoutes from "./Components/Routes/PageRoutes";
import { ThemeProvider } from "@material-ui/core/styles";
import getTheme from "./Configs/ThemeConfig";
import ThemeContext from "./Context/ThemeContext";


function App() {

  const curThemeName = localStorage.getItem("appTheme") || "light";

  const [themeType, setThemeType] = useState(curThemeName);

  const setThemeName = (themeName) => {
    localStorage.setItem("appTheme", themeName);
    setThemeType(themeName);
  };

  const theme = getTheme({
    paletteType: themeType,
  });

  return (
    <ThemeContext.Provider value={{ setThemeName, curThemeName }}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <PageRoutes />
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
