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
      color: grey;
      transform: rotate(90deg);
    }
  }
  .nav-links-container {
    width: 35%;
    display: flex;
    justify-content: space-around;
    overflow-x: hidden;
    @media (max-width: 600px) {
      padding: 2rem;
      width: 70%;
      justify-content: space-between;
    }
    @media (max-width: 300px) {
      display: none;
    }

    @media (min-width: 1000px) {
      width: 25%;
    }
  }
`;

export default StyledNav;
