import styled from 'styled-components'

export const CartContainer = styled.div`
    border-left: 1px solid black;
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
        padding: .5em;
        border: none;
        border-radius: 5px;
        background: lightskyblue;
        font-size: 12px;
    }
    p {
        margin-top: 10px;
    }
   
`