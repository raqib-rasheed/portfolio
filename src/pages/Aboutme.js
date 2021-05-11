import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import { Link } from "gatsby";
import SEO from "../components/SEO";
import avatars from "../images/avatars.png";
import ThemeContext from "../context/ThemeContext";

const StyledAboutMe = styled.div`
  padding-bottom: 2rem;
  background-color: ${({ darkMode }) => (darkMode ? "black" : "white")};
  width: 100%;
  height: 90vh;
  h2 {
    color: ${({ darkMode }) => (darkMode ? "white" : "black")};
    padding: 2rem 0;
    text-align: center;
  }
  p {
    padding: 0 3rem;
    color: ${({ darkMode }) => (darkMode ? "black" : "white")};
  }
  p:first-child {
    padding: 3rem;
  }
  .content-wrapper {
    width: 50%;
    margin: 0 auto;
    background-color: ${({ darkMode }) => (darkMode ? "white" : "black")};
    padding-bottom: 1rem;
    border-radius: 1rem;
    a {
      color: grey;
    }
    @media (max-width: 600px) {
      font-size: 17px;
      width: 75%;
    }
  }
`;
export default function Aboutme({
  data: { allSanityAboutMe: aboutmeContent },
}) {
  const contetArray = aboutmeContent.nodes[0]._rawBody[0].children;
  return (
    <>
      <SEO title="About Me" image={avatars && avatars} />
      <Nav />
      <ThemeContext.Consumer>
        {({ darkMode }) => {
          return (
            <StyledAboutMe darkMode={darkMode}>
              <h2> About Me</h2>
              <div className="content-wrapper">
                <p>
                  {contetArray[0].text}
                  <Link to="/Projects">{contetArray[1].text}</Link>
                </p>
                <p>{contetArray[2].text}</p>
              </div>
            </StyledAboutMe>
          );
        }}
      </ThemeContext.Consumer>
    </>
  );
}

export const query = graphql`
  query {
    allSanityAboutMe {
      nodes {
        _rawBody
      }
    }
  }
`;
