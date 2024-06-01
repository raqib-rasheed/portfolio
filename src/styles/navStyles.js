import styled from "styled-components";

const StyledNav = styled.ul`
  padding: 1rem 2rem !important;
  margin: 0;
  overflow-x: hidden !important;
  display: flex;
  justify-content: space-between;
  background-color: ${({ darkMode }) => (darkMode ? "black" : "white")};

  li {
    list-style: none;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    :hover {
      box-shadow: 0px 0px 8px 6px rgba(0, 0, 0, 0.1);
    }
    &.active-nav-item {
      background: ${({ darkMode }) => (darkMode ? "white" : "black")};
      a {
        color: ${({ darkMode }) => (darkMode ? "black" : "white")};
      }
    }
    a {
      text-decoration: none;
      color: ${({ darkMode }) => (darkMode ? "white" : "black")};
      font-size: 1.25rem;
    }
  }
  .toggler-container {
    margin: 0;
    padding: 0;
    padding-top: 0.75rem;

    @media (max-width: 600px) {
      padding: 1.75rem;
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
    padding: 0.5rem 0;
    width: 40%;
    display: flex;
    border-radius: 10px;
    justify-content: space-around;
    @media (max-width: 1100px) {
      font-size: 0.75rem;
      width: 60%;
      justify-content: space-between;
    }
    @media (max-width: 530px) {
      display: none;
    }

    @media (min-width: 1000px) {
      width: 40%;
    }
  }
`;

export default StyledNav;
