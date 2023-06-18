import styled from 'styled-components'
import newImage from '../../assets/images/newImage.jpg'


const InitialContainer = styled.div`
    color: #2A2928;
    text-shadow: 1px 1px 5px #D9D9D9;
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
        background-color: #EBF3F5;
        border-radius: 5px;
        margin-top: 20px;
    }

`

export {InitialContainer} 