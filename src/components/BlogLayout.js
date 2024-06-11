import React from "react";
import styled from "styled-components";

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
      <BlogContents>{/* <p>{content}</p> */}</BlogContents>
    </>
  );
}
