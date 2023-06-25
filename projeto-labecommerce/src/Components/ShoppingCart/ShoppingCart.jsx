import Itens from './Itens/Itens'
import styled from 'styled-components'
import React from 'react'
import { CartContainer } from './ShoppingCartStyle'
import cartIcon from '../../assets/Icons/cartIcon.png'
import Cart from './Cart/Cart'

const ShoppingCart = (props) => {
  // console.log(props)
  const [cartModalOpen, setCartModalOpen] = React.useState(false)

  function handlecartModal() {
    setCartModalOpen(prevState => !prevState)
  }

 

  return (
    <CartContainer>
        <img src={cartIcon} onClick={handlecartModal}/>
        {cartModalOpen && <><h3>Carrinho</h3>
        <Itens amount={props.amount}cart={props.itemsCart} cartProducts={props.cartProducts} deleteItem={props.deleteItem}/></>}
    </CartContainer>
  )
}

export default ShoppingCart