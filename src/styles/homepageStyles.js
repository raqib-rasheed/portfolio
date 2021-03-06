import styled from "styled-components";

const HomePageStyled = styled.div`
  background-color: ${({ darkMode }) => (darkMode ? "black" : "white")};
  color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  width: 100%;
  height: 60.7vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rem 0;
  justify-content: start;
  overflow: hidden !important;

  @media (max-width: 600px) {
    height: 82vh;
    padding-bottom: 0;
    overflow: hidden !important;
  }

  h2 {
    margin: 0 !important;
    padding: 0;
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
        transform: scale(1.45);
      }
    }
  }
`;

export default HomePageStyled;
