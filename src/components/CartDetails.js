import React from 'react';
import CartItem from './CartItem';

function CartDetails({ cartContents, prices, remove }) {
  let totalTotalPrice = prices.reduce((total, curr) => {
    return total + curr.value;
  }, 0);
  if (cartContents.length === 0) {
    return <div className="cart-details">Your Cart Is Empty</div>;
  } else {
    return (
      <div className="cart-details">
        <div className="cart-items">
          {cartContents.map((item) => {
            return (
              <CartItem
                {...item}
                key={item.cartId}
                prices={prices}
                remove={remove}
              />
            );
          })}
        </div>
        <div className="total-price">
          TOTAL PRICE: {totalTotalPrice} septims
        </div>
        <button>Go to checkout</button>
      </div>
    );
  }
}

export default CartDetails;
