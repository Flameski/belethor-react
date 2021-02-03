import React from 'react';

function ProductModal({ modalContent, close, updateCart }) {
  return (
    <div className="modal-background" onMouseDown={close}>
      <div className="product-modal" onMouseDown={(e) => e.stopPropagation()}>
        <div className="close-modal" onMouseDown={close}>
          X
        </div>
        <img src={modalContent.image} alt="" />
        <h2>{modalContent.name}</h2>
        <p>{modalContent.type}</p>
        <p>{modalContent.description}</p>
        <div>
          <div>price: {modalContent.value}</div>
          <div>weight: {modalContent.weight}</div>
        </div>
        <div>
          <button onClick={() => updateCart(modalContent.id)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
