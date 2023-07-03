import {MdDeleteForever} from 'react-icons/md';
import React from 'react'
import CartItem from "./ItensStyle";

const Itens = (props) => {
  

  const cartProducts = props.cart.map((element, index) => {
   
    // console.log(element);
    return (
      <CartItem key={index}>
        <div>
          {/* <img src={element.imageUrl} /> */}
          <p>
            {" "}
            {element.quantity}x {element.name}
          </p>
          <MdDeleteForever
            className="deleteIcon"
            onClick={() => props.deleteItem(element)}
          />
        </div>
        <hr />
      </CartItem>
    );
  });

  return (
    <div>
      {cartProducts}
      <p>Valor Total: R$ {props.amount}</p>
      <button type="button">Comprar</button>
    </div>
  );
};

export default Itens;
