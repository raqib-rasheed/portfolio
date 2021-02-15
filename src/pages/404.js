import * as React from "react";
import Nav from "../components/Nav";
import styled from "styled-components";

// styles
const HeadingStyles = styled.div`
  h4 {
    text-align: center;
  }
`;

// markup
const NotFoundPage = () => {
  return (
    <>
      <Nav />
      <HeadingStyles>
        <h4>Oops...Page you requested is not available .Go back home</h4>
      </HeadingStyles>
    </>
  );
};

export default NotFoundPage;
