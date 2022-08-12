import React from "react";
import "./hero.scss";

const Hero = ({ title }) => {
  return (
    <div className="hero">
      <div className="overlay">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Hero;
