import * as React from "react";
import Nav from "../components/Nav";
import avatar from "../images/avatar.jpg";
import iconsArray from "../elemets/homeSocialmediaiconsArray";
import { v4 as uuid } from "uuid";
import HomePageStyled from "../styles/homepageStyles";
import SEO from "../components/SEO";
import avatars from "../images/avatars.webp";
import ThemeContext from "../context/ThemeContext";

const HomePage = () => {
  return (
    <>
      <ThemeContext.Consumer>
        {(context) => {
          return (
            <div
              style={{
                height: "calc(100vh - 78px)",
                display: "flex",
                flexDirection: "column",
                overflowX: "hidden",
                justifyContent: "space-between",
              }}
            >
              <HomePageStyled darkMode={context.darkMode}>
                <p className="hey-text"> Hey, I'm</p>{" "}
                <h2> Raqib Abdul Rasheed </h2>
                <div className="avatar-container">
                  <img
                    width="180px"
                    height="160px"
                    src={avatar}
                    alt="avataar"
                  />
                </div>
                <div className="icons-group">
                  {iconsArray.map((icon) => (
                    <a
                      key={uuid()}
                      href={icon.href}
                      rel="noreferrer"
                      target="blank"
                    >
                      {icon.icon}
                    </a>
                  ))}
                </div>
                <h3> Frontend developer </h3>
              </HomePageStyled>
            </div>
          );
        }}
      </ThemeContext.Consumer>
      <SEO image={avatars} title="Raqib Rasheed" />
    </>
  );
};

export default HomePage;
