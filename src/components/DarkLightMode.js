import React from "react";
import styled from "styled-components";
import sun from "../images/sun.png";
import moon from "../images/moon.png";

const IconHolder = styled.div`
  :hover {
    cursor: pointer;
  }
  @media (max-width: 600px) {
    padding: 1.5rem;
  }
`;

export default function DarkLightMode({ darkMode, toggleDark }) {
  console.log(darkMode, toggleDark);
  return (
    <IconHolder>
      <img
        alt="darkmode-toggler"
        onClick={toggleDark}
        className="sun"
        src={darkMode ? sun : moon}
      />
    </IconHolder>
  );
}

//
//
