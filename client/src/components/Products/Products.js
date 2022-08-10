import React from "react";
import "./products.scss";
import { SiAffinitydesigner } from "react-icons/si";
import { FaUserTie } from "react-icons/fa";
import { TbSofa } from "react-icons/tb";
import { GiFlatPlatform } from "react-icons/gi";

const Products = () => {
  return (
    <div className="products">
      <div className="container">
        <h3>Visualize your ideas</h3>
        <div className="cards">
          <div className="product active">
            <div className="logo">
              <SiAffinitydesigner size={50} />
            </div>
            <h5>Smooth Workflow</h5>
            <p>We provide the most easy smooth workflow design of enterior.</p>
          </div>
          <div className="product ">
            <div className="logo">
              <FaUserTie size={50} />
            </div>
            <h5>Qualified Designers</h5>
            <p>We provide the most easy smooth workflow design of enterior.</p>
          </div>
          <div className="product ">
            <div className="logo">
              <TbSofa size={50} />
            </div>
            <h5>Smooth Workflow</h5>
            <p>We provide the most easy smooth workflow design of enterior.</p>
          </div>
          <div className="product ">
            <div className="logo">
              <GiFlatPlatform size={50} />
            </div>
            <h5>Smooth Workflow</h5>
            <p>We provide the most easy smooth workflow design of enterior.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
