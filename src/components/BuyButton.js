import React, { useState, useEffect } from 'react';

function BuyButton({ id, mouseOver, update }) {
  const [buyBtnVisible, setBuyBtnVisible] = useState(false);

  useEffect(() => {
    if (mouseOver) {
      setBuyBtnVisible(true);
    } else setBuyBtnVisible(false);
  }, [mouseOver]);
  return (
    <div key={id}>
      <button
        onClick={() => {
          update(id);
        }}
        className="buy-btn"
        style={
          buyBtnVisible ? { visibility: 'visible' } : { visibility: 'hidden' }
        }
      >
        See more
      </button>
    </div>
  );
}

export default BuyButton;
