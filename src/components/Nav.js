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

  useEffect(() => {
    const activePage = window.location.pathname;
    if (!activeNavItem?.path) {
      setActiveNavItem(navLinks?.[0]);
      return;
    }
    if (activeNavItem?.path !== activePage) {
      const config = navLinks.find((config) => config.path === activePage);
      console.log({ config });
      setActiveNavItem(config);
    }
  }, [activeNavItem]);

  function handleNavClick(navConfig) {
    setActiveNavItem(navConfig);
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
                    {navLinks.map((navConfig) => (
                      <li
                        onClick={() => handleNavClick(navConfig)}
                        className={
                          activeNavItem?.path === navConfig.path
                            ? "active-nav-item"
                            : ""
                        }
                      >
                        <Link to={navConfig.path}>{navConfig.label}</Link>
                      </li>
                    ))}
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
