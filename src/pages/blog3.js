import React from "react";
import BlogLayout from "../components/BlogLayout";

export default function BlogThree({ data }) {
  return (
    <>
      <BlogLayout data={data} />
    </>
  );
}
export const query = graphql`
  query {
    sanityPost(title: { regex: "/semantic html/i" }) {
      body
      title
      description
    }
  }
`;
