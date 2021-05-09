import React, { useEffect, useState } from "react";

const ThemeContext = React.createContext({
  dark: false,
  toggleDark: () => {},
});

const ThemeProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDark = () => {
    localStorage.setItem("dark", darkMode);
    setDarkMode((prevState) => !prevState);
  };
  useEffect(() => {
    const lsDark = JSON.parse(localStorage.getItem("dark"));
    console.log(lsDark);
    lsDark ? setDarkMode(true) : setDarkMode(false);
  }, []);
  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleDark,
      }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
export { ThemeProvider };
