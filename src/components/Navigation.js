import React from 'react';
import Cart from './Cart';

function Navigation({ cartContents, remove }) {
  return (
    <nav>
      <div className="main-nav">
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
        </ul>
      </div>
      <Cart cartContents={cartContents} remove={remove} />
    </nav>
  );
}

export default Navigation;
