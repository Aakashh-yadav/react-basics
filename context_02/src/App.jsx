import "./App.css";
import { ThemeProvider } from "./Contexts/Theme";
import { useState } from "react";

function App() {
  const [themeMode, setThemeMode] = useState("Light"); // Manage theme state

  // Define theme functions
  const darkMode = () => setThemeMode("Dark");
  const lightMode = () => setThemeMode("Light");

  return (
    <ThemeProvider value={{ themeMode, darkMode, lightMode }}>
      <MainContent />
    </ThemeProvider>
  );
}

// A child component
function MainContent() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <Card />
    </div>
  );
}

function Card() {
  const { themeMode, darkMode, lightMode } = useTheme(); // Access the context

  return (
    <div
      className={`p-6 rounded-lg shadow-lg text-center ${
        themeMode === "Dark" ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-2xl font-bold mb-4">Current Theme: {themeMode}</h1>
      <button
        onClick={darkMode}
        className="bg-gray-800 text-white px-4 py-2 rounded mr-2"
      >
        Dark Mode
      </button>
      <button
        onClick={lightMode}
        className="bg-gray-200 text-black px-4 py-2 rounded"
      >
        Light Mode
      </button>
    </div>
  );
}

export default App;
