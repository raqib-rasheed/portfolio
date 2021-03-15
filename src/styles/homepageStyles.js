import styled from "styled-components";

const HomePageStyled = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 600px) {
    height: 65vh;
  }

  h2 {
    margin: 0;
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
      color: black;
      :not(:first-child) {
        margin-left: 1rem;
      }
      svg{
        font-size:1.25rem;
      }
      svg:hover {
        transform: scale(1.45);
      }
    }
  }
`;

export default HomePageStyled;
