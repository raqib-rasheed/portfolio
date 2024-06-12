import styled from "styled-components";

const StyledNav = styled.ul`
  padding: 1rem 2rem !important;
  margin: 0;
  overflow-x: hidden !important;
  display: flex;
  justify-content: space-between;
  background-color: ${({ darkMode }) => (darkMode ? "black" : "white")};

  @media (max-width: 600px) {
    padding: 1.15rem !important;
  }

  li {
    list-style: none;
    padding: 0.5rem 1rem;
    font-size: 1.25rem;

    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }

  a.active-nav-item {
    display: inline-block;
    border-radius: 2rem;
    margin: 0 2px;
    background: ${({ darkMode }) => (darkMode ? "white" : "#0a0a09")};
    color: ${({ darkMode }) => (darkMode ? "black" : "white")};
    li:hover {
      text-decoration: none;
    }
  }

  a {
    display: flex;
    align-items: center;
    border-radius: 1rem;
    text-decoration: none;
    color: ${({ darkMode }) => (darkMode ? "white" : "black")};
    font-size: 1rem;
  }

  .toggler-container {
    margin: 0;
    padding: 0;
    padding-top: 0.75rem;

    @media (max-width: 600px) {
      padding: 1.25rem;
    }
    svg {
      color: ${({ darkMode }) => (darkMode ? "white" : "black")};
      font-size: 1.5rem;
    }

    svg:hover {
      cursor: pointer;
      transform: rotate(90deg);
    }
  }

  .nav-links-container {
    border: ${({ darkMode }) =>
      darkMode ? "2px solid white" : "2px solid black"};
    padding: 2px 0;
    width: 70%;
    max-width: 450px !important;
    min-width: 330px !important;
    display: flex;
    border-radius: 1.75rem;
    justify-content: space-between;

    @media (max-width: 1000px) {
      width: 40%;
      li {
        font-size: 0.85rem;
      }
    }

    @media (max-width: 800px) {
      li {
        font-size: 0.75rem;
      }
      width: 55%;
    }

    @media (max-width: 605px) {
      display: none;
    }

    @media (min-width: 1000px) {
      width: 55%;
      li {
        font-size: 1.15rem;
      }
    }

    @media (min-width: 1500px) {
      li {
        font-size: 1.25rem;
        padding: 0.5rem 1.5rem;
      }
    }
  }
`;

export default StyledNav;
