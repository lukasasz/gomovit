import React from 'react';

const ProductCard = ({ name, image, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>From ${price}</p>
      <button>Buy</button>
    </div>
  );
};

export default ProductCard;