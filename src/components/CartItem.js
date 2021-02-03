import React from 'react';

function CartItem({ image, name, quantity, prices, itemId, remove }) {
  let price = [];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i].id === itemId) {
      price.push(prices[i].value);
    }
  }
  let totalPrice = price.reduce((total, curr) => {
    return total + curr;
  });

  return (
    <div className="cart-item">
      <div>
        <img src={image} alt={name} />{' '}
      </div>
      <div className="cart-item-details">
        <div>
          <strong>{name}</strong>
        </div>
        <div>
          <span style={{ color: 'gray' }}>Quantity:</span> {quantity}
        </div>
        <div>
          <span style={{ color: 'gray' }}>Price:</span> {totalPrice}
        </div>
        <span className="remove-cart-item" onClick={() => remove(itemId)}>
          X
        </span>
      </div>
    </div>
  );
}

export default CartItem;
