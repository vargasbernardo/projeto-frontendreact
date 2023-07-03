import styled from "styled-components";

export const CartContainer = styled.div`
  width: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 10px;
  row-gap: 10px;
  color: var(--primary-font-color);
  padding: 1em;

  button {
    cursor: pointer;
    padding: 0.5em;
    border: none;
    border-radius: 5px;
    background: var(--primary-dark-color);
    font-size: 12px;
    margin-top: 10px;
    color: var(--primary-font-color);
  }
  p {
    margin-top: 10px;
  }
  svg {
    width: 32px;
    height: 32px;
    cursor: pointer;
    margin-top: 10px;
  }
`;
