import Nav from '../components/Nav';
import * as React from "react";
import { Link } from 'gatsby';
import { Container, TopicHighlight, Topics } from '../styles/BlogsStyles';



export default function Blogs() {
  return (
    <>
      <Nav />
      <Container>
        <TopicHighlight>
          <div className="container">
            <h3>My coding Journey</h3>
          </div>
        </TopicHighlight>
        <Topics>
          <h3>Take a look!!!!!</h3>
          <ul>
            <li>
              <Link to="/blog1">First line of code</Link>
            </li>
            <li>
              <Link to="/blog2">FlexBox</Link>
            </li>
            <li>
              <Link to="/blog3">Semantic HTML and Accessibility</Link>
            </li>
            <li>
              <Link to="/blog4">React Hooks</Link>
            </li>
            <li>
              <Link to="/blog5">Authentication and Authorization</Link>
            </li>
          </ul>
        </Topics>
      </Container>
    </>
  );
} 