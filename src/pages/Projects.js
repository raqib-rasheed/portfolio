import React from "react";
import Nav from "../components/Nav";
import {
  Card,
  PortfolioContentStyles,
  ProjectWrapper,
} from "../styles/potfolioStyles";
import { v4 as uuid } from "uuid";
import SEO from "../components/SEO";

export default function Portfolio({ data: { allSanityProjects } }) {
  return (
    <>
      <SEO title="Raqib's Portfolio" />
      <Nav />
      <PortfolioContentStyles>
        <div className="overlay">
          <h2>Take a look at my projects</h2>
          {allSanityProjects.nodes.map((project, inx) => {
            debugger;
            return (
              <ProjectWrapper alt={inx % 2 === 0}>
                <h3 key={uuid()}>{project.title}</h3>
                <div key={uuid()} className="project-description">
                  <h5 key={uuid()}>{project.description}</h5>
                </div>

                <Card key={uuid()}>
                  <a key={uuid()} href={project.projectUrl}>
                    <img
                      key={uuid()}
                      alt=""
                      className="screenshot-holder"
                      src={project.mainImage.asset.fluid.src}
                    />
                  </a>
                </Card>
              </ProjectWrapper>
            );
          })}
        </div>
      </PortfolioContentStyles>
    </>
  );
}

export const query = graphql`
  query {
    allSanityProjects(sort: { fields: sequencenumber }) {
      nodes {
        projectUrl
        description
        title
        GitHubUrl
        mainImage {
          asset {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`;
