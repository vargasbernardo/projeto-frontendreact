import styled from "styled-components";

export const FilterStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 7vw;
  padding: 1em;
  font-size: 12px;
  color: var(--primary-font-color);
  align-items: center;
  
  input {
    width: 100%;
  }

  h3 {
    margin: 0;
  }

  label {
    margin-top: 1em;
    font-size: 10px;
  }
  svg {
    width: 16px;
    height: 16px;
    cursor: pointer;
    align-self: center;
    margin-top: 18px;
  }
`;
