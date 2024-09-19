import React from 'react';

const Product = () => {
  return (
    <div className="product-page">
      <h1>Product Name</h1>
      <div className="product-gallery">
        {/* Add product images here */}
      </div>
      <div className="product-info">
        <h2>From $999</h2>
        <button>Buy</button>
        <p>Product description goes here...</p>
      </div>
    </div>
  );
};

export default Product;