import styled from "styled-components";
import newImage from "../../assets/images/newImage.jpg";

const InitialContainer = styled.div`
  color: #e0aa5c;
  text-shadow: 1px 1px 5px black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url(${newImage}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  button {
    padding: 8px 15px;
    cursor: pointer;
    font-weight: bold;
    border: none;
    background-color: #918e94;
    border-radius: 5px;
    margin-top: 20px;
    color: var(--primary-font-color);
  }
  h3 {
    max-width: 600px;
    font-size: 12px;
  }
  span {
    font-family: "Rubik Moonrocks";
  }
`;

export { InitialContainer };
