import styled from "styled-components";

export const ProjectWrapper = styled.div`
  width: 40%;
  margin: 0 auto;
  padding: 1rem 3rem;
  background-color: ${(props) =>
    props.alt==="true" ? "rgba(64, 63, 63,0.26)" : "rgb(33, 32, 32)"};
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
    height: 11rem;
  }
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
  svg {
    color: black;
    margin-left: 1rem;
    :hover {
      color: gray;
      transform: scale(1.15);
    }
  }
`;
export const PortfolioContentStyles = styled.div`
  box-shadow: 0px -2px 15px black;
  padding-bottom: 1.75rem;
  background-color: rgba(0, 0, 0, 0.88);

  .overlay {
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    transition: all 1s ease;
    height: 100%;
    width: 100%;
  }
  .project-description {
    margin: 0 auto;

    h5 {
      color: white;
      text-align: center;
      font-weight: lighter;
    }
  }
  h3 {
    justify-self: end;
    text-align: center;
    color: rgba(210, 255, 255, 0.9);
  }
  h2 {
    padding: 1.75rem;
    text-align: center;
    color: white;
    font-weight: 400;
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
`;
