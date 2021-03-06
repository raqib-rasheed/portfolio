import Nav from "../components/Nav";
import * as React from "react";
import { Link } from "gatsby";
import { Container, TopicHighlight, Topics } from "../styles/BlogsStyles";
import blogsArray from "../elemets/blogsDetailsArray";
import { v4 as uuid } from "uuid";
import { showDescription } from "../utils/blogDesplayDescription";

export default function Blogs({ data }) {
  const [blogDetails, setblogDetails] = React.useState("");
  return (
    <>
      <Nav />
      <Container>
        <TopicHighlight>
          <div className="container">
            <h3>My coding Journey</h3>
            <Link to={blogDetails.to}>
              <div className="blog-details-container">
                <h4>{blogDetails.title}</h4>
                <p>{blogDetails.description}</p>
              </div>
            </Link>
          </div>
        </TopicHighlight>
        <Topics>
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
        </Topics>
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
