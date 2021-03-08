import styled from "styled-components";

const StyledNav = styled.ul`
  padding: 1.25rem 2.5rem !important;
  margin: 0;
  overflow-x: hidden !important;
  display: flex;
  justify-content: space-between;

  li {
    list-style: none;
    a {
      text-decoration: none;
      color: black;
      font-size: 2.5rem;
      :hover {
        color: lightgrey;
      }
    }
  }
  .toggler-container {
    height: 2.5rem;
    margin: 0;
    padding: 0;

    @media (max-width: 600px) {
      padding: 2rem;
    }

    img:hover {
      cursor: pointer;
      transform: rotate(90deg);
    }
  }
  .nav-links-container {
    width: 55%;
    display: flex;
    justify-content: space-around;
    @media (max-width: 600px) {
      font-size: 1rem;
      padding: 2rem;
      width: 100%;
      justify-content: space-between;
    }
    @media (max-width: 460px) {
      display: none;
    }

    @media (min-width: 1000px) {
      width: 55%;
    }
  }
`;

export default StyledNav;
