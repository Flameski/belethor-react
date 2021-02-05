import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';

function Navigation({ cartContents, prices, remove }) {
  const [menuOpen, setMenuOpen] = useState(true);
  const menuControls = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav>
      <div className="main-nav">
        <div className="menu-toggle" onClick={menuControls}>
          <div className="menu-burger__middle"></div>
        </div>
        <ul className={menuOpen ? 'menu-visibility' : ''}>
          <li>
            <Link to="/" onClick={menuControls}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={menuControls}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={menuControls}>
              About
            </Link>
          </li>
        </ul>
      </div>
      <Cart cartContents={cartContents} prices={prices} remove={remove} />
      <hr />
    </nav>
  );
}

export default Navigation;
