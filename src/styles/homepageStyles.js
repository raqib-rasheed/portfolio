import styled from "styled-components";

const HomePageStyled = styled.div`
  background-color: ${({ darkMode }) => (darkMode ? "black" : "white")};
  color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  width: 100%;
  height: 61.95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rem 0;
  justify-content: start;
  overflow: hidden !important;
  border-top: ${({ darkMode }) => (darkMode ? "1px solid black" : "")};

  @media (max-width: 600px) {
    height: 73vh;
    padding-bottom: 0;
    padding-top: 3.5rem;
  }

  h3 {
    font-size: 1.25rem;
  }

  h2 {
    margin: 0 !important;
    padding: 0;
    background-color: ${({ darkMode }) => (darkMode ? "black" : "white")};
  }
  .avatar-container {
    width: 10rem;
    overflow: hidden;
    img {
      max-width: 100%;
      border-radius: 50%;
    }
  }
  .icons-group {
    margin-top: 2rem;
    a {
      color: ${({ darkMode }) =>
        darkMode ? "white !important" : "black !important"};
      :not(:first-child) {
        margin-left: 1rem;
      }
      svg {
        font-size: 1.25rem;
      }
      svg:hover {
        transform: scale(1.05);
      }
    }
  }
`;

export default HomePageStyled;
