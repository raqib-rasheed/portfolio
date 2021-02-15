import React from "react";
import BlogLayout from "../components/BlogLayout";

export default function BlogTwo({ data }) {
  return (
    <>
      <BlogLayout data={data} />
    </>
  );
}

export const query = graphql`
  query {
    sanityPost(title: { regex: "/flexbox/i" }) {
      body
      title
      description
    }
  }
`;
