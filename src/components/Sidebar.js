import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { BsX } from "react-icons/bs";

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

export default function Sidebar({ toggled, setToggled }) {
  return (
    <SidebarStyled>
      <ul className={toggled ? "closed" : ""}>
        <span
          className="button-close"
          onClick={() => setToggled(true)}
          onKeyDown=""
        >
          <BsX color="white" size="4rem" />
        </span>
        <li>
          <Link onClick={() => setToggled(true)} to="/">
            Home
          </Link>
        </li>
        {/* <li className="disabled">
          <Link onClick={() => setToggled(true)} to="/Blogs/">
            Blogs
          </Link> 
        </li> */}
        <li>
          <Link onClick={() => setToggled(true)} to="/Projects">
            Projects
          </Link>
        </li>
        {/* <li className="disabled">
          <Link onClick={() => setToggled(true)} to="/Skills">
            Skills
          </Link>
        </li> */}
        <li>
          <Link onClick={() => setToggled(true)} to="/Aboutme" onKeyDown="">
            About Me
          </Link>
        </li>
      </ul>
    </SidebarStyled>
  );
}
