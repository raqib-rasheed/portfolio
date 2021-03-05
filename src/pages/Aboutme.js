import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import { Link } from "gatsby";
import SEO from "../components/SEO";
import avatars from "../images/avatars.png";

const StyledAboutMe = styled.div`
  box-shadow: 0px -2px 15px black;
  padding-bottom: 2rem;
  background-color: rgba(0, 0, 0, 0.88);
  width: 100%;
  height: 90vh;
  border-radius: 6px;
  h2 {
    padding: 2rem 0;
    color: white;
    text-align: center;
  }
  p {
    padding: 0 3rem;
    color: white;
  }
  p:first-child {
    padding: 3rem;
  }
  .content-wrapper {
    width: 60%;
    margin: 0 auto;
    background-color: rgba(64, 63, 63, 0.16);
    padding-bottom: 1rem;
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
      <StyledAboutMe>
        <h2> About Me</h2>
        <div className="content-wrapper">
          <p>
            {contetArray[0].text}
            <Link to="/Projects">{contetArray[1].text}</Link>
          </p>
          <p>{contetArray[2].text}</p>
        </div>
      </StyledAboutMe>
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
