import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import DarkLightMode from './DarkLightMode';
import Sidebar from './Sidebar';



const StyledNav = styled.ul`
  display: flex;
  justify-content: space-between;
  li {
    list-style: none;
    a {
      text-decoration: none;
      color: black;
      font-size: 2.5rem;
      :hover {
        color: lightgrey;
      }
    }
  }
`;

const TogglerStyles = styled.div`
  display:flex;
  margin:0;
  padding:0;
  img:hover{
    cursor:pointer;
    color:grey;
  }
`;
const StyledLinks = styled.div`
  width:60%;
  display: flex;
  justify-content:space-between;
`;


export default function Nav() {
  const [toggled,setToggled]=React.useState(true)

  function displaySidebar() {
    setToggled(!toggled);
  }
  return(
  <>
      <StyledNav>
        <TogglerStyles>
          <img
            alt=""
            onClick={displaySidebar}
            src="https://img.icons8.com/android/24/000000/menu.png"
          />
        </TogglerStyles>
        <StyledLinks>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Blogs/">Blogs</Link>
          </li>
          <li>
            <Link to="/Portfolio">Portfolio</Link>
          </li>
          <DarkLightMode />
        </StyledLinks>
      </StyledNav>
      <Sidebar toggled={toggled} setToggled={setToggled} />
      </>
  )
}







