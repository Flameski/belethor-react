import React, { useState } from 'react';
import BuyButton from './BuyButton';

function Item({ id, name, image, update }) {
  const [mouseOver, setMouseOver] = useState(false);
  return (
    <div
      className="single-product"
      onMouseEnter={() => {
        setMouseOver(true);
      }}
      onMouseLeave={() => {
        setMouseOver(false);
      }}
    >
      <img src={image.default} alt={name} className="item-image" />
      <p>{name}</p>
      <BuyButton id={id} mouseOver={mouseOver} update={update} />
    </div>
  );
}

export default Item;
