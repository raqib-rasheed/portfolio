import { Link } from "gatsby";
import React from "react";

import StyledNav from "../styles/navStyles";
// import DarkLightMode from "./DarkLightMode";
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
            {/* <li>
              <Link to="/Blogs/">Blogs</Link>
            </li> */}
            <li>
              <Link to="/Portfolio">Portfolio</Link>
            </li>
          </div>
          {/* <DarkLightMode /> */}
        </StyledNav>
      ) : (
        <Sidebar toggled={toggled} setToggled={setToggled} />
      )}
    </>
  );
}
