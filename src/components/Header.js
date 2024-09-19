import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/features">Features</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/support">Support</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;