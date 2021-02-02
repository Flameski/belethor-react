import React, { useState, useEffect } from 'react';
import CartDetails from './CartDetails';
import cart from '../img/shopping-cart.svg';

function Cart({ cartContents, remove }) {
  const [showDetails, setShowDetails] = useState(false);
  const details = () => {
    setShowDetails(!showDetails);
  };
  const [itemsInCart, setItemsInCart] = useState(0);
  useEffect(
    (acc = 0) => {
      // без долната проверка, ако премахнеш и последния айтем от количката, не се връща на 0, а остава на последната стойност
      if (cartContents.length === 0) {
        setItemsInCart(0);
      }
      cartContents.forEach((item) => {
        acc += item.quantity;
        setItemsInCart(acc);
      });
    },
    [cartContents]
  );
  return (
    <div>
      <div className="cart" onMouseDown={details}>
        <div>
          <img src={cart} alt="shopping cart icon" />
        </div>
        <div>{itemsInCart}</div>
      </div>
      {showDetails && (
        <CartDetails cartContents={cartContents} remove={remove} />
      )}
    </div>
  );
}

export default Cart;
