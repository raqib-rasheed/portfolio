import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";

const BlogContents = styled.div`
  width: 70%;
  margin: 0 auto;
`;

export default function BlogLayout({ data }) {
  // const {
  //   sanityPost: { body: content },
  // } = data;
  return (
    <>
      <Nav />
      <BlogContents>{/* <p>{content}</p> */}</BlogContents>
    </>
  );
}
