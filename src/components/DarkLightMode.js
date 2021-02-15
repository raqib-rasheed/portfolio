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

export default function DarkLightMode() {
  const [darkmode, setDarkMode] = React.useState(true);
  return (
    <IconHolder>
      <img
        alt=""
        onClick={() => setDarkMode(!darkmode)}
        className="sun"
        src={darkmode ? sun : moon}
      />
    </IconHolder>
  );
}

//
//
