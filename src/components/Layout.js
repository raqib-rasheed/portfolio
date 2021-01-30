import React from "react";
import Nav from "./Nav";
import GlobalStyles from "../styles/GlobalStyles";



export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
          {children}
    </>
  );
}
