import * as React from "react";
import Nav from "../components/Nav";
import avatar from "../images/avatars.png";

import iconsArray from "../elemets/homeSocialmediaiconsArray";
import { v4 as uuid } from "uuid";
import HomePageStyled from "../styles/homepageStyles";
import SEO from "../components/SEO";
import avatars from "../images/avatars.png";

// markup

const HomePage = () => {
  return (
    <>
      <SEO image={avatars} title="Raqib Rasheed" />
      <div style={{ overflowX: "hidden" }}>
        <Nav />
        <HomePageStyled>
          <p> Hey, I'm</p> <h2> Raqib Rasheed </h2>
          <div className="avatar-container">
            <img src={avatar} alt="avataar" />
          </div>
          <div className="icons-group">
            {iconsArray.map((icon) => (
              <a key={uuid()} href={icon.href} rel="noreferrer" target="blank">
                {icon.icon}
              </a>
            ))}
          </div>
          <h4> Frontend developer </h4>
        </HomePageStyled>
      </div>
    </>
  );
};

export default HomePage;