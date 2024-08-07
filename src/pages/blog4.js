import React from 'react';
import BlogLayout from '../components/BlogLayout';
import { graphql } from 'gatsby';

export default function BlogFour({ data }) {
  return (
    <>
      <BlogLayout data={data} />
    </>
  );
}
export const query = graphql`
  query {
    sanityPost(title: { regex: "/react hooks/i" }) {
      body
      title
      description
    }
  }
`;
