import React, { useState } from 'react';
import { inventory } from '../data/inventory';
import Item from './Item';
import ProductModal from './ProductModal';

function Products({ updateCart }) {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    image: inventory[0].image.default,
    name: 'Item Name',
    description: 'Item Description',
    type: 'Item Type',
    weight: 0,
    value: 0,
  });
  const updateProductModal = (id) => {
    let product = id - 1;
    setShowModal(true);
    setModalContent({
      ...modalContent,
      id: product,
      image: inventory[product].image.default,
      name: inventory[product].name,
      description: inventory[product].description,
      type: inventory[product].type,
      weight: inventory[product].weight,
      value: inventory[product].value,
    }); //spread оператора е необходим, за да не се презапише целия обект, когато пращаш само id; id e минус 1, защото id-тата започват от 1, а array-a от 0
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <section className="products">
        <h2>Product list</h2>
        <div className="products-list">
          {showModal && (
            <ProductModal
              modalContent={modalContent}
              close={closeModal}
              updateCart={updateCart}
            /> //close e alias на closeModal, за да е по-кратко
          )}
          {inventory.map((item) => {
            return <Item key={item.id} {...item} update={updateProductModal} />; //update e alias на updateProductModal, за да е по-кратко
          })}
        </div>
      </section>
    </>
  );
}

export default Products;
