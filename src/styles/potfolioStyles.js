import styled from "styled-components";

export const ProjectWrapper = styled.div`
  width: 40%;
  margin: 0 auto;
  padding: 1rem 3rem;
  color: ${(props) =>
    props.alt === "true" ? "black !important" : "white !important"};
  background-color: ${(props) =>
    props.alt === "true" ? "rgb(28,25,26)" : "rgba(240, 240, 240 ,0.83)"};
  h5 {
    color: ${({ alt }) =>
      alt === "true" ? "white !important" : "black !important"};
    text-align: center;
    font-weight: lighter;
  }
  h3 {
    justify-self: end;
    text-align: center;
    color: ${({ alt }) =>
      alt === "true" ? "white !important" : "black !important"};
  }
`;

export const Card = styled.div`
  position: relative;
  overflow-y: hidden;
  height: 18rem;
  width: 100%;
  max-width: 45rem;
  margin: 0 auto;
  border-radius: 4px;
  box-shadow: 6px 3px 9px black;
  margin-bottom: 4.5rem;
  display: flex;
  @media (max-width: 650px) {
    height: 9rem;
  }

  .screenshot-holder {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-size: 100%;
  }
`;
export const PortfolioContentStyles = styled.div`
  background-color: ${({ darkMode }) =>
    darkMode ? "black !important" : "white !important"};

  .overlay {
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    transition: all 1s ease;
    height: 100%;
    width: 100%;
    padding-top: 2rem;
  }
  .project-description {
    margin: 0 auto;
  }
  h2 {
    margin: 0;
    padding: 1.75rem;
    width: 42.8%;
    margin: 0 auto;
    border-radius: 4px 4px 0 0;
    text-align: center;
    color: black;
    font-weight: 400;
    background-color: ${({ darkMode }) => (darkMode ? "#f1f1f1" : "white")};
  }
  @media (max-width: 500px) {
    font-size: 17px;
  }
  @media (max-width: 400px) {
    font-size: 13px;
  }
  @media (min-width: 1000px) {
    font-size: 24px;
  }
  ::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgb(128, 128, 128);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(128, 128, 128, 0.33);
  }
`;
