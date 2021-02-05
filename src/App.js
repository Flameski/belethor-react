import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Products from './components/Products';
import Error from './components/404';
import { inventory } from './data/inventory';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [cartContents, setCartContents] = useState([]);
  const [prices, setPrices] = useState([]); // масив с обекти, като всеки обект е с id и цена
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
      setPrices([...prices, { id: id, value: tempCartContents[index].price }]);
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
          price: inventory[id].value,
          quantity: 1,
        },
      ]);
      setPrices([...prices, { id: id, value: inventory[id].value }]);
      setCartId(++cartId);
    }
  };
  const removeItem = (id) => {
    let tempCartContents = cartContents.filter((item) => {
      return item.itemId !== id;
    });
    setCartContents(tempCartContents);
    let tempPrices = prices.filter((item) => {
      return item.id !== id;
    });
    setPrices(tempPrices);
  };
  return (
    <Router>
      <div className="app">
        <Navigation
          cartContents={cartContents}
          prices={prices}
          remove={removeItem}
        />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products">
            <Products updateCart={updateCart} />
          </Route>
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
