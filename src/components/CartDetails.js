import React from 'react';
import CartItem from './CartItem';

function CartDetails({ cartContents, remove }) {
  if (cartContents.length === 0) {
    return <div className="cart-details">Your Cart Is Empty</div>;
  } else {
    return (
      <div className="cart-details">
        <div className="cart-items">
          {cartContents.map((item) => {
            return <CartItem {...item} key={item.cartId} remove={remove} />;
          })}
        </div>
      </div>
    );
  }
}

export default CartDetails;
