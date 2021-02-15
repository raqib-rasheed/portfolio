import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  @media (min-width: 600px) {
    overflow: hidden;
  }
`;

export const TopicHighlight = styled.div`
  box-shadow: 0px -2px 15px black;
  padding-bottom: 2rem;
  background-color: rgba(0, 0, 0, 0.88);
  width: 60%;
  height: 90vh;
  border-radius: 6px;
  @media (max-width: 600px) {
    display: none;
  }
  .container {
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
  }
  h3 {
    padding: 2rem;
    text-align: center;
    font-size: 3rem;
    color: rgba(237, 242, 242, 0.64);
    font-weight: 400;
  }
  a,
  a:active,
  a:visited,
  a:focus {
    list-style: none;
    text-decoration: none;
  }

  .blog-details-container {
    color: rgba(237, 242, 242, 0.94);
    padding: 1rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    :hover {
      color: rgba(237, 242, 242, 0.64);
    }
  }
`;
export const Topics = styled.div`
  color: black;
  flex-grow: 1;
  align-self: center;

  h3 {
    margin-bottom: 1.5rem;
    font-size: 3rem;
    text-align: center;
    font-weight: 400;
  }
  ul {
    margin: 0 auto;
  }
  li {
    padding-bottom: 1rem;
    list-style: none;
    :hover {
      transform: scale(0.99);
    }
    a {
      color: gray;
      text-decoration: none;
      :hover {
        color: black;
      }
    }
  }

  @media (max-width: 600px) {
    color: white;
    height: 90vh;
    background-color: #3b4e57;
    ul {
      margin: 20% 15%;
      justify-self: center;
    }
    li a {
      color: white;
    }
  }
`;
