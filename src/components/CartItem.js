import React from 'react';

function CartItem({ image, name, quantity, itemId, remove }) {
  return (
    <div className="cart-item">
      <div>
        <img src={image} alt={name} />{' '}
      </div>
      <div style={{ position: 'relative' }}>
        <div>{name}</div>
        <div>{quantity}</div>
        <span className="remove-cart-item" onClick={() => remove(itemId)}>
          X
        </span>
      </div>
    </div>
  );
}

export default CartItem;
