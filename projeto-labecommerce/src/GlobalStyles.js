import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --primary-font-color: #ECEEF3;
        --primary-dark-color: #2B2B2B
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Orbitron';
    }
    input, select {
        color: black;
    }
    
  



`;
export default GlobalStyles;
