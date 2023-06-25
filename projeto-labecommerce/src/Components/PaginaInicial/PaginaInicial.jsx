import { InitialContainer } from "./PaginaInicialStyle"


export default function PaginaInicial(props) {
    function getInStore() {
        props.setIsInStore(prevState => !prevState)
    }
    return (
        <InitialContainer>
            <h1>Bem-vindo(a) a <span>Labecommerce</span></h1>
            <h3>O seu destino intergaláctico para brinquedos e artigos infantis temáticos de espaço! Aqui, você encontrará uma ampla seleção de produtos emocionantes que trazem a magia e a maravilha do universo para crianças de todas as idades. Clique no botao e navegue pelo nosso site para descobrir uma infinidade de opções que vão encantar tanto pequenos astronautas em treinamento quanto curiosos exploradores espaciais</h3>
            <button onClick={getInStore}>Clique aqui!</button>
        
        </InitialContainer>
        
    )
}