import styled from "styled-components";

const HomePageStyled = styled.div`
  width: 100%;
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    margin-top: 4rem;
  }

  h2 {
    margin: 0;
    padding: 0;
  }
  .avatar-container {
    width: 15rem;
    overflow: hidden;
    img {
      max-width: 100%;
      border-radius: 50%;
    }
  }
  .icons-group {
    margin-top: 3rem;
    a {
      color: black;
      :not(:first-child) {
        margin-left: 1.25rem;
      }
      svg:hover {
        transform: scale(1.25);
      }
    }
  }
`;

export default HomePageStyled;
