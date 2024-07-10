import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import ThemeContext from '../context/ThemeContext';
import { graphql } from 'gatsby';

const StyledAboutMe = styled.div`
  padding-bottom: 2rem;
  background-color: ${({ darkMode }) =>
    darkMode ? 'black' : 'white'};
  width: 100%;
  height: 80.35vh;
  padding-top: 6rem;
  p {
    font-size: 1.25rem;
    padding: 0 3rem;
    color: ${({ darkMode }) => (darkMode ? 'black' : 'white')};
  }
  p:first-child {
    margin: 0;
    padding: 3rem;
  }
  .content-wrapper {
    box-shadow: 19px 33px 38px -17px black;
    width: 50%;
    margin: 0 auto;
    background-color: ${({ darkMode }) =>
      darkMode ? 'white' : 'black'};
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
      <ThemeContext.Consumer>
        {({ darkMode }) => {
          return (
            <StyledAboutMe darkMode={darkMode}>
              <div className="content-wrapper">
                <p>
                  {contetArray[0].text}
                  <Link to="/Projects">{contetArray[1]?.text}</Link>
                  <br />
                  <br />
                  {contetArray[2]?.text}
                </p>
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
