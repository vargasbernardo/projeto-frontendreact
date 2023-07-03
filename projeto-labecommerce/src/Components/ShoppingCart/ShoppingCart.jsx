import Itens from './Itens/Itens'
import React from 'react'
import { CartContainer } from './ShoppingCartStyle'
import {RiShoppingCartLine} from 'react-icons/ri'


const ShoppingCart = (props) => {
  // console.log(props)
  const [cartModalOpen, setCartModalOpen] = React.useState(true)

  function handlecartModal() {
    setCartModalOpen(prevState => !prevState)
  }

 

  return (
    <CartContainer>
        <RiShoppingCartLine onClick={handlecartModal}/>
        {cartModalOpen && <><h3>Carrinho</h3>
        <Itens amount={props.amount}cart={props.itemsCart} cartProducts={props.cartProducts} deleteItem={props.deleteItem}/></>}
    </CartContainer>
  )
}

export default ShoppingCart