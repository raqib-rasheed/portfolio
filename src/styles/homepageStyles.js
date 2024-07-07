import styled from 'styled-components';

const HomePageStyled = styled.div`
  background-color: ${({ darkMode }) =>
    darkMode ? 'black' : 'white'};
  color: ${({ darkMode }) => (darkMode ? 'white' : 'black')};
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden !important;
  border-top: ${({ darkMode }) =>
    darkMode ? '1px solid black' : ''};
  padding-bottom: 1rem;

  .hey-text {
    margin: 0;
  }

  @media (max-width: 600px) {
    height: 73vh;
    padding-bottom: 0;
    padding-top: 3.5rem;
  }

  h3 {
    font-size: 1.25rem;
    margin: 0.25rem 0 !important;
  }

  h2 {
    margin: 0 !important;
    margin-bottom: 0.5rem !important;
    padding: 0;
    background-color: ${({ darkMode }) =>
      darkMode ? 'black' : 'white'};
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
        darkMode ? 'white !important' : 'black !important'};
      :not(:first-child) {
        margin-left: 1rem;
      }
      svg {
        padding-right: 8px;
        font-size: 1.25rem;
      }
      svg:hover {
        transform: scale(1.05);
      }
    }
  }
`;

export default HomePageStyled;
