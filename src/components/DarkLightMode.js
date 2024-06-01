import React from "react";
import styled from "styled-components";
import { BsMoon, BsSun } from "react-icons/bs";

const IconHolder = styled.div`
  padding-top: 0.75rem;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 600px) {
    padding: 1.5rem;
  }
`;

export default function DarkLightMode({ darkMode, toggleDark }) {
  function toggleTheme() {
    toggleDark();
    window.localStorage.setItem("dark", !darkMode);
  }
  return (
    <IconHolder>
      {darkMode ? (
        <BsSun color="white" size="1.5rem" onClick={toggleTheme} />
      ) : (
        <BsMoon color="black" size="1.5rem" onClick={toggleTheme} />
      )}
    </IconHolder>
  );
}
