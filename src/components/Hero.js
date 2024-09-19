import React from 'react';

const Hero = ({ title, subtitle, image }) => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${image})` }}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <button>Learn more</button>
    </section>
  );
};

export default Hero;