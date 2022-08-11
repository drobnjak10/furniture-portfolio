import React from "react";
import "./partners.scss";

const Partners = () => {
  return (
    <div className="partners">
      {/* <h2 className='title'>
            Our partners
        </h2> */}
      <div className="container">
        <div className="left">
          <div className="words">
            <span>Team.</span>
            <span>Customer.</span>
            <span>Community.</span>
          </div>
          <h2 className="title">We Work With the Best Partners</h2>
          <p>
            While we are at the forefront of and specialize in design-build, we
            are very familiar with a number of delivery methods and are
            confident we can find the process that will best help you meet your
            goals.
          </p>
        </div>
        <div className="right">
          <div className="img">
            <img src="/google.png" alt="" />
          </div>
          <div className="img">
            <img src="/comp.png" alt="" />
          </div>
          <div className="img">
            <img src="/google.png" alt="" />
          </div>
          <div className="img">
            <img src="/google.png" alt="" />
          </div>
          <div className="img">
            <img src="/google.png" alt="" />
          </div>
          <div className="img">
            <img src="/google.png" alt="" />
          </div>
          <div className="img">
            <img src="/google.png" alt="" />
          </div>
          <div className="img">
            <img src="/google.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
