import { useLayoutEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./Contexts/Theme";
import { useEffect } from "react";
import ThemeBtn from "./Components/Themebtn";
import Card from "./Components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const lightMode = () => {
    setThemeMode("light");
  };
  const darkMode = () => {
    setThemeMode("dark");
  };
  //actual mode change
  useEffect(() => {
    const themetogle = document.querySelector("html").classList;
    themetogle.remove("light","dark")
    themetogle.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, lightMode, darkMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
