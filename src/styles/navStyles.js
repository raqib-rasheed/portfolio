import styled from "styled-components";

const StyledNav = styled.ul`
  padding: 1rem 2rem !important;
  margin: 0;
  overflow-x: hidden !important;
  display: flex;
  justify-content: space-between;

  li {
    list-style: none;
    a {
      text-decoration: none;
      color: black;
      font-size: 1.75rem;
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
      padding: 1.75rem;
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
      font-size: .75rem;
      padding: 1.75rem;
      width: 100%;
      justify-content: space-between;
    }
    @media (max-width: 530px) {
      display: none;
    }

    @media (min-width: 1000px) {
      width: 55%;
    }
  }
`;

export default StyledNav;
