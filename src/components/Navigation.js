import React, { useState } from 'react';
import Cart from './Cart';

function Navigation({ cartContents, remove }) {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <nav>
      <div className="main-nav">
        <div
          className="menu-toggle"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <div className="menu-burger__middle"></div>
        </div>
        <ul className={menuOpen ? '' : 'menu-visibility'}>
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
