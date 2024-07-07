import * as React from 'react';
import { Container } from '../styles/BlogsStyles';
import { graphql } from 'gatsby';

export default function Blogs({ data }) {
  return (
    <>
      <Container>
        {/* <TopicHighlight>
          <div className="container">
            <h3>My coding Journey</h3>
            <Link to={blogDetails.to}>
              <div className="blog-details-container">
                <h4>{blogDetails.title}</h4>
                <p>{blogDetails.description}</p>
              </div>
            </Link>
          </div>
        </TopicHighlight> */}
        <h3 style={{ margin: 'auto', marginTop: '2rem' }}>
          Blogs Coming Soon...
        </h3>
        {/* <Topics>
 <ul>
            {blogsArray.map((blog) => (
              <li key={uuid()}>
                <Link
                  onMouseEnter={(e) => showDescription(e, data, setblogDetails)}
                  key={uuid()}
                  id={blog.title}
                  to={blog.to}
                >
                  {blog.title}
                </Link>
              </li>
            ))}
          </ul>
        </Topics> */}
      </Container>
    </>
  );
}

export const query = graphql`
  query blogContents {
    allSanityPost {
      nodes {
        description
        body
        id
        title
      }
    }
  }
`;
