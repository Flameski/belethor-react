import React from 'react';
import BuyButton from './BuyButton';

function Item({ id, name, image, value, update }) {
  return (
    <div
      className="single-product"
      onMouseDown={() => {
        update(id);
      }}
    >
      <img src={image.default} alt={name} className="item-image" />
      <p className="item-name">{name}</p>
      <p className="item-value">{value}</p>
      <BuyButton id={id} update={update} />
    </div>
  );
}

export default Item;
