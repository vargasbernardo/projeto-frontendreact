import Itens from './Itens/Itens'
import styled from 'styled-components'
import { CartContainer } from './ShoppingCartStyle'
import Cart from './Cart/Cart'

const ShoppingCart = (props) => {
  // console.log(props)

 

  return (
    <CartContainer>
        <h3>Carrinho</h3>
        <Itens amount={props.amount}cart={props.itemsCart} cartProducts={props.cartProducts} deleteItem={props.deleteItem}/>
    </CartContainer>
  )
}

export default ShoppingCart