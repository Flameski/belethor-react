import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Products from './components/Products';
import { inventory } from './data/inventory';

function App() {
  const [cartContents, setCartContents] = useState([]);
  let [cartId, setCartId] = useState(0); //уникални ID-та на всеки запис на продукт в кошницата, различен от ID-то на самия продукт
  const updateCart = (id) => {
    let exists = false; // проверка дали продукт с това id вече присъства в кошницата
    let index = 0; // проверка в кой продукт от масива cartContents има повторение
    cartContents.forEach((item) => {
      if (item.itemId === id) {
        exists = true;
        index = cartContents.indexOf(item);
      }
    });
    if (exists) {
      // ако присъства се прави временно копие на масива, в което се променя quantity-то само на конкретния продукт и после се сетва
      let tempCartContents = cartContents;
      tempCartContents[index].quantity += 1; // обновяваме quantity-то на елемента, чийто индекс сме открили по-рано
      setCartContents([...tempCartContents]);
    } else {
      // ако не присъства се добавя нов запис с quantity 1
      setCartContents([
        ...cartContents,
        {
          cartId: cartId,
          itemId: id,
          image: inventory[id].image.default,
          name: inventory[id].name,
          quantity: 1,
        },
      ]);
      setCartId(++cartId);
    }
  };
  const removeItem = (id) => {
    let tempCartContents = cartContents.filter((item) => {
      return item.itemId !== id;
    });
    setCartContents(tempCartContents);
  };
  return (
    <div className="app">
      <Navigation cartContents={cartContents} remove={removeItem} />
      <Main />
      <Products updateCart={updateCart} />
    </div>
  );
}

export default App;
