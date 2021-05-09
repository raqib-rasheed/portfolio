import { Link } from "gatsby";
import React from "react";
import ThemeContext from "../context/ThemeContext";

import StyledNav from "../styles/navStyles";
import DarkLightMode from "./DarkLightMode";
import Sidebar from "./Sidebar";

export default function Nav() {
  const [toggled, setToggled] = React.useState(true);

  function displaySidebar() {
    setToggled(!toggled);
  }
  return (
    <>
      {toggled ? (
        <StyledNav>
          <div className="toggler-container">
            <img
              alt=""
              onClick={displaySidebar}
              src="https://img.icons8.com/android/24/000000/menu.png"
            />
          </div>
          <div className="nav-links-container">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Aboutme">About Me</Link>
            </li>
            {/* <li>
              <Link to="/Blogs/">Blogs</Link>
            </li> */}
            <li>
              <Link to="/Projects">Projects</Link>
            </li>
          </div>
          <ThemeContext.Consumer>
            {({ darkMode, toggleDark }) => (
              <DarkLightMode toggleDark={toggleDark} darkMode={darkMode} />
            )}
          </ThemeContext.Consumer>
        </StyledNav>
      ) : (
        <Sidebar toggled={toggled} setToggled={setToggled} />
      )}
    </>
  );
}
