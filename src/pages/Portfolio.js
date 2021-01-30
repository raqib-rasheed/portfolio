import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import { Card } from '../styles/CardStyles';
import { FaShareSquare } from "@react-icons/all-files/fa/FaShareSquare";

const ContentStyles = styled.div`
  box-shadow: 0px -2px 15px black;
  padding-bottom: 2rem;
  background-color: rgba(230, 255, 247, 1);
  .overlay {
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    transition: all 1s ease;
    height: 100%;
    width: 100%;
  }
  h3 {
    padding: 2rem;
    text-align: center;
    font-size: 3rem;
  }
`;
export default function Portfolio() {
  return (
    <>
      <Nav />
      <ContentStyles>
        <div className="overlay">
          <h3>Take a look a at my projects</h3>
          <Card>
            <div className="head">
              <h4>GitHub-Users</h4>
              <a
                href="https://github.com/raqib-rasheed/github-users-react-app"
                target="_blank"
              >
                <FaShareSquare />
              </a>
            </div>
          </Card>
          <Card>
            <div className="head">
              <h4>Expense-Tracker</h4>
              <a
                href="https://github.com/raqib-rasheed/github-users-react-app"
                target="_blank"
              >
                <FaShareSquare />
              </a>
            </div>
          </Card>
          <Card>
            <div className="head">
              <h4>Shop-sharer</h4>
              <a
                href="https://github.com/raqib-rasheed/github-users-react-app"
                target="_blank"
              >
                <FaShareSquare />
              </a>
            </div>
          </Card>
          <Card>
            <div className="head">
              <h4>GitHub-Users</h4>
              <a
                href="https://github.com/raqib-rasheed/github-users-react-app"
                target="_blank"
              >
                <FaShareSquare />
              </a>
            </div>
          </Card>
        </div>
      </ContentStyles>
    </>
  );
}
