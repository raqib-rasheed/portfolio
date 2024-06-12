import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { BsX } from "react-icons/bs";
import useNavConfig from "../utils/navConfig";

const SidebarStyled = styled.div`
  width: 100vw;
  overflow-x: hidden;
  ul {
    z-index: 1;
    padding: 0;
    margin: 0;
    position: fixed;
    overflow-y: hidden;
    background-color: black;
    width: 100%;
    height: 100vh;
    transition: width 0.75s ease-in;
    -webkit-transition: width 0.75s ease-in;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-decoration: none;
    list-style: none;
  }
  .button-close {
    position: absolute;
    top: 2%;
    left: 92%;
    cursor: pointer;
    @media (max-width: 600px) {
      top: 2%;
      left: 88%;
    }
    @media (max-width: 600px) {
      top: 2%;
      left: 80%;
    }
  }
  li {
    padding: 0;
    margin: 3rem 0;
    margin-left: 4rem;
    font-size: 2.5rem;

    a {
      color: white;
      text-decoration: none;
      :hover {
        color: grey;
      }
    }
  }
  .disabled {
    pointer-events: none;
    opacity: 0.6;
  }
  .closed {
    width: 0%;
  }
`;

export default function Sidebar({ toggled, setToggled, activeNavItem }) {
  const navLinks = useNavConfig();

  return (
    <SidebarStyled>
      <ul className={toggled ? "closed" : ""}>
        <span
          aria-label="close button"
          role="button"
          tabIndex={0}
          className="button-close"
          onClick={() => setToggled(true)}
          onKeyDown={() => {}}
        >
          <BsX color="white" size="4rem" />
        </span>

        {navLinks.map((navConfig, index) => (
          <li>
            <Link
              key={`${index}` + navConfig.path}
              className={
                activeNavItem?.path === navConfig.path ? "active-nav-item" : ""
              }
              onClick={() => setToggled(true)}
              to={navConfig.path}
            >
              {navConfig.label}
            </Link>
          </li>
        ))}
      </ul>
    </SidebarStyled>
  );
}
