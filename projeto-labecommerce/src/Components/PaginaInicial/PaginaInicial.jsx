import { InitialContainer } from "./PaginaInicialStyle"


export default function PaginaInicial(props) {
    function getInStore() {
        props.setIsInStore(prevState => !prevState)
    }
    return (
        <InitialContainer>
            <h1>Essa eh a pagina inicial</h1>
            <h3>Clique no botao para entrar na loja e ver nossos produtos!</h3>
            <button onClick={getInStore}>CLickCLick</button>
        
        </InitialContainer>
        
    )
}