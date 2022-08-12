import React from "react";
import "./gallery.scss";

const Images = () => {
  return (
    <div className="gallery">
      <div className="container">
        <div className="image">
          <div className="overlay">
            <a href="#" className="btn">
              Full View
            </a>
          </div>
          <img src="/images/img-min.jpg" alt="" />
        </div>
        <div className="image">
          <img src="/images/project12-min.jpg" alt="" />
        </div>
        <div className="image">
          <img src="/images/img-min.jpg" alt="" />
        </div>
        <div className="image">
          <img src="/images/img-min.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Images;
