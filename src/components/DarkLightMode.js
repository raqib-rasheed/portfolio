import React from 'react';
import styled from 'styled-components';


const IconHolder = styled.div`
  padding-right:12px;
  display:flex;
  justify-content:center;
  align-items:center;
    :hover{
      cursor:pointer;
    }
  img{
    margin-top:-.5rem;

  }
`;

export default function DarkLightMode() {
  const [darkmode,setDarkMode] = React.useState(true)
  return(
  <IconHolder>
{darkmode ? <img alt="" onClick={()=>setDarkMode(false)} className="sun" src="https://imgur.com/KSlnUzS.png"></img>:<img alt="" className="moon" src="https://imgur.com/HYm2ph4.png"  onClick={()=>setDarkMode(true)}></img>}
    </IconHolder>
  )
}