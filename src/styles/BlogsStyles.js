import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const TopicHighlight = styled.div`
  box-shadow: 0px -2px 15px black;
  padding-bottom: 2rem;
  background-color: #3b4e57;
  width: 60%;
  height: 87vh;
  border-radius: 6px;
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
    color: white;
    font-weight: 400;
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
    padding-bottom:1rem;
    list-style: none;
      :hover{
        transform:scale(.99);
      }
    a {
      color: gray;
      text-decoration: none;
      :hover{
        border-radius:10px;
        box-shadow:-1px 0px 2px black;
        color:black;
      }
    }
  }
`;
