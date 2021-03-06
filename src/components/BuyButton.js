import React from 'react';

function BuyButton({ id, update }) {
  return (
    <div key={id}>
      <button
        onClick={() => {
          update(id);
        }}
        className="buy-btn"
      >
        See more
      </button>
    </div>
  );
}

export default BuyButton;
