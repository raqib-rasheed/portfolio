import { Link } from "gatsby";
import React from "react";
import ThemeContext from "../context/ThemeContext";
import { GiHamburgerMenu } from "react-icons/gi";

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
      <ThemeContext.Consumer>
        {({ darkMode, toggleDark }) => {
          return (
            <>
              {toggled ? (
                <StyledNav darkMode={darkMode}>
                  <div className="toggler-container">
                    <GiHamburgerMenu onClick={displaySidebar} />
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

                  <DarkLightMode toggleDark={toggleDark} darkMode={darkMode} />
                </StyledNav>
              ) : (
                <Sidebar
                  darkMode={darkMode}
                  toggled={toggled}
                  setToggled={setToggled}
                />
              )}
            </>
          );
        }}
      </ThemeContext.Consumer>
    </>
  );
}
