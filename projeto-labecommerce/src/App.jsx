import React from 'react'
import Filters from './Components/Filters/Filters'
import Home from './Components/ProductList/Home/Home.jsx'
import ShoppingCart from './Components/ShoppingCart/ShoppingCart'
import { produtos } from './assets/ProductList'
import { MainContainer } from './AppStyle'

function App() {
  const [minFilter, setMinFilter] = React.useState('')
  const [maxFilter, setMaxFilter] = React.useState('')
  const [searchFilter, setSearchFilter] = React.useState('')
  const [cart, setCart] = React.useState([])
  const [amount, setAmount] = React.useState(0)

    console.log(maxFilter, minFilter, searchFilter)

    function handleClick(product) {
      const existingProduct = cart.find(item => item.id === product.id);
    
      if (existingProduct) {
        const updatedCart = cart.map(item => {
          
          if (item.id === product.id) {
            return {...item, quantity: item.quantity + 1};
          }
          return item;
        });
        setCart(updatedCart);
      } else {
        setCart([...cart, {...product, quantity: 1}]);
      }
      setAmount(prevAmount =>  prevAmount + Number(product.value))
    }
  
    function deleteItem(product) {
      const existingProduct = cart.find(item => item.id === product.id);
    
      if (existingProduct) {
        const updatedCart = cart.map(item => {
          if (item.id === product.id) {
            if (item.quantity === 1) {
              return null;
            } else {
              return {...item, quantity: item.quantity - 1};
            }
          }
          return item;
        }).filter(item => item !== null);
    
        setCart(updatedCart);
      }
      setAmount(prevAmount =>  prevAmount - Number(product.value))
    }

  return (
    <MainContainer>
      <Filters 
        minFilter={minFilter}
        setMinFilter={setMinFilter}
        maxFilter={maxFilter}
        setMaxFilter={setMaxFilter}
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
      />
      <Home 
        produtos={produtos}
        handleClick={handleClick}
        maxFilter={maxFilter}
        searchFilter={searchFilter}
        minFilter={minFilter}
      />
      <ShoppingCart 
        itemsCart={cart}
        deleteItem={deleteItem}
        amount={amount}
      />
    </MainContainer>
  )
}

export default App
