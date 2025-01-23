import { createContext, useContext } from "react";

// Create the context with default values
export const ThemeContext = createContext({
  themeMode: "Light", // Default theme
  darkMode: () => {}, // Default noop function
  lightMode: () => {}, // Default noop function
});

// Create the provider for context
export const ThemeProvider = ThemeContext.Provider;

// Create a custom hook for ease of access
export default function useTheme() {
  return useContext(ThemeContext);
}
