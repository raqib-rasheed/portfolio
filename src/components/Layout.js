import React from "react";
import ThemeContext from "../context/ThemeContext";
import GlobalStyles from "../styles/GlobalStyles";

export default function Layout({ children }) {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        return (
          <>
            <GlobalStyles />
            <div className={context.dark ? "darkTheme" : "lightTheme"}>
              {children}
            </div>
          </>
        );
      }}
    </ThemeContext.Consumer>
  );
}
