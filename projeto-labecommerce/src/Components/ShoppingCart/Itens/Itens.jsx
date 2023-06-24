

const Itens = (props) => {
// console.log(props)
  
const cartProducts = props.cart.map((element, index) => {

  // console.log(element)
  return (
        <div key={index}>
          <p> {element.quantity}x {element.name}</p> 
         
          <button onClick={() => props.deleteItem(element)}type="button">Remover</button>
        </div>
        
    )
})

  return (
    <div>
      {cartProducts}
      <p>Valor Total: R$ {props.amount}</p>
    </div>
  )
}

export default Itens