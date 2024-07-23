import React from 'react';
import {
  Card,
  PortfolioContentStyles,
  ProjectWrapper,
} from '../styles/potfolioStyles';
import { v4 as uuid } from 'uuid';
import ThemeContext from '../context/ThemeContext';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

export default function Portfolio({ data: { allSanityProjects } }) {
  return (
    <>
      <ThemeContext.Consumer>
        {(context) => {
          return (
            <PortfolioContentStyles darkMode={context.darkMode}>
              <div className="overlay">
                {allSanityProjects.nodes.map((project, inx) => {
                  return (
                    <ProjectWrapper
                      key={uuid()}
                      alt={(inx % 2 === 0).toString()}
                    >
                      <h3>{project.title}</h3>
                      <div className="project-description">
                        <h5>{project.description}</h5>
                      </div>

                      <Card darkMode={context.darkMode}>
                        <a
                          rel="noreferrer"
                          href={project.projectUrl}
                          target="_blank"
                        >
                          <StaticImage
                            alt=""
                            className="screenshot-holder"
                            src={project.mainImage.asset.url}
                          />
                        </a>
                      </Card>
                    </ProjectWrapper>
                  );
                })}
              </div>
            </PortfolioContentStyles>
          );
        }}
      </ThemeContext.Consumer>
    </>
  );
}

export const query = graphql`
  query {
    allSanityProjects(sort: { sequencenumber: ASC }) {
      nodes {
        projectUrl
        description
        title
        GitHubUrl
        mainImage {
          asset {
            url
          }
        }
      }
    }
  }
`;
