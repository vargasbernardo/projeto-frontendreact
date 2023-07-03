import styled from "styled-components";


export const CardContainer = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  justify-items: end;
  display: grid;
  grid-template-columns: repeat(auto-fit, 290px);
  gap: 20px;
  padding: 1em 0 1em 1em;

  img {
    width: 260px;
    height: 300px;
    cursor: pointer;
  }

  hr {
    width: 100%;
    border: 1px solid var(--primary-dark-color);
  }

  button {
    cursor: pointer;
    /* margin: 5px 0; */
    font-size: 10px;
    font-weight: bold;
    border-radius: 5px;
    border: none;
    padding: 0.75em;
    background-color: var(--primary-dark-color);
    color: white;
  }

  div {
    border-radius: 5px;
    background: #bec8c4;
    background-position-x: right;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.5em;
    padding: 8px;
    width: 100%;
    font-size: 12px;
    color: #1c1916;
  }
`;

