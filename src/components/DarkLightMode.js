import React from "react";
import styled from "styled-components";
import { BsMoon, BsSun } from "react-icons/bs";

const IconHolder = styled.div`
  :hover {
    cursor: pointer;
  }
  @media (max-width: 600px) {
    padding: 1.5rem;
  }
`;

export default function DarkLightMode({ darkMode, toggleDark }) {
  return (
    <IconHolder>
      {darkMode ? (
        <BsSun color="white" size="1.5rem" onClick={toggleDark} />
      ) : (
        <BsMoon color="black" size="1.5rem" onClick={toggleDark} />
      )}
    </IconHolder>
  );
}

//
//
