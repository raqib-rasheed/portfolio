import * as React from "react"
import styled from "styled-components";
import Nav from '../components/Nav';
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaDev } from "@react-icons/all-files/fa/FaDev";


// markup
const ContentStyles = styled.div`
  margin-top:8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;

  h2 {
    margin: 0;
    padding: 0;
  }
`;

const AvatarContainer = styled.div`
    width:15rem;
    overflow: hidden;
    img{
      max-width:100%;
      border-radius:50%;
    }
`;
const IconsGroup = styled.div`
  margin-top:3rem;
  svg:hover{
    transform:scale(1.25)
  }
  a{
    color:black;
  }
  a:not(:first-child){
    margin-left:1.25rem;
  }
`;

const HomePage = () => {

  return (
    <>
      <Nav />
      <ContentStyles>
        <p>Hey, I'm</p>
        <h2>Raqib Rasheed</h2>
        <AvatarContainer>
          <img src="https://imgur.com/wnSjyJ9.png"></img>
        </AvatarContainer>
        <IconsGroup>
          <a href="https://github.com/raqib-rasheed" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/raqib-abdul-rasheed-ba18991b2/" target="_blank">
            <FaLinkedinIn />
          </a>
          <a href="https://twitter.com/raqib__rasheed" target="_blank">
            <FaTwitter />
          </a>
          <a href="https://dev.to/raqib__rasheed"
            target="_blank">
            <FaDev />
          </a>
        </IconsGroup>
        <p>Front-end developer</p>
      </ContentStyles>
    </>
  );
}

export default HomePage