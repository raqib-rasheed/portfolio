import React from "react";
import Nav from "../components/Nav";
import SEO from "../components/SEO";
import avatars from "../images/avatars.webp";
import GlobalStyles from "../styles/GlobalStyles";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <SEO title="About Me" image={avatars && avatars} />
      <Nav />
      {children}
    </>
  );
};

export default Layout;
