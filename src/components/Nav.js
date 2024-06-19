import { Link } from "gatsby";
import React, { useEffect } from "react";
import ThemeContext from "../context/ThemeContext";
import { GiHamburgerMenu } from "react-icons/gi";

import StyledNav from "../styles/navStyles";
import DarkLightMode from "./DarkLightMode";
import Sidebar from "./Sidebar";
import useNavConfig from "../utils/navConfig";

export default function Nav() {
  const navLinks = useNavConfig();
  const [toggled, setToggled] = React.useState(true);
  const [activeNavItem, setActiveNavItem] = React.useState();

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
                  activeNavItem={activeNavItem}
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
