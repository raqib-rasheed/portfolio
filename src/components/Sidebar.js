import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';


const SidebarStyled = styled.div`
ul{
  z-index:1;
  padding:0;
  margin:0;
  position:fixed;
  background-color:black;
  width:100vw;
  height:90vh;
  transition: width 0.75s ease-in;
  -webkit-transition: width 0.75s ease-in;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  text-decoration:none;
  list-style:none;
}
li{
  padding:0;
  margin:3rem 0;
  margin-left: 4rem;
  font-size:3rem;

  a{
    color:white;
    text-decoration:none;
    :hover{
      color:grey;
    }
  }
}
.closed{
  width:0%;
  visibility:hidden;
}
`; 


export default function Sidebar({ toggled,setToggled }) {
  return (
    <SidebarStyled >
          <ul className={toggled ? "closed" : ""}>
          <li>
            <Link onClick={()=>setToggled(true)} to="/">Home</Link>
          </li>
          <li>
            <Link onClick={()=>setToggled(true)} to="/Blogs/">Blogs</Link>
          </li>
          <li>
            <Link onClick={()=>setToggled(true)} to="/Portfolio">Portfolio</Link>
          </li>
                    <li>
            <Link onClick={()=>setToggled(true)} to="/Skills">Skills</Link>
          </li>
                    <li>
            <Link onClick={()=>setToggled(true)} to="/Aboutme">About Me</Link>
          </li>
          </ul>
    </SidebarStyled>
  );
}

