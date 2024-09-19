import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div>
          <h4>Shop and Learn</h4>
          <ul>
            <li><a href="/products">Gomovit Wristbands</a></li>
            <li><a href="/accessories">Accessories</a></li>
          </ul>
        </div>
        <div>
          <h4>Gomovit Store</h4>
          <ul>
            <li><a href="/find-a-store">Find a Store</a></li>
            <li><a href="/order-status">Order Status</a></li>
          </ul>
        </div>
        <div>
          <h4>About Gomovit</h4>
          <ul>
            <li><a href="/about">Our Story</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-legal">
        <p>&copy; 2023 Gomovit Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;