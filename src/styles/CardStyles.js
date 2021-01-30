import styled from "styled-components";

export const Card = styled.div`
  height: 12rem;
  width: 80%;
  margin: 0 auto;
  background-color: #f5f3f0;
  border-radius: 2px;
  box-shadow: 0px 2px 10px black;
  margin-bottom: 2rem;
  h4 {
    margin: 0;
    padding: 0;
    text-align: center;
    color: #363330;
  }
  .head {
    display: flex;
    justify-content: center;
    svg {
      color: black;
      margin-left: 1rem;
      :hover {
        color: gray;
        transform: scale(1.15);
      }
    }
  }
`; 