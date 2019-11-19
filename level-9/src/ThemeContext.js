import { createContext } from "react";

// passing in an empty function as an "updater" but in this case is doesn't do anything
const ThemeContext = createContext("green", () => {});

export default ThemeContext;
