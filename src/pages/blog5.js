import React from "react";
import BlogLayout from "../components/BlogLayout";

export default function BlogFive({ data }) {
  return (
    <>
      <BlogLayout data={data} />
    </>
  );
}
export const query = graphql`
  query {
    sanityPost(title: { regex: "/authentication/i" }) {
      body
      title
      description
    }
  }
`;
