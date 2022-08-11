import React from "react";
import "./services.scss";
import { AiOutlineArrowRight } from "react-icons/ai";

const Services = () => {
  return (
    <div className="services">
      <h2 className="title">
        Helps you transform your space into a freash one
      </h2>
      <div className="container">
        <div className="card">
          <div className="img">
            <div className="overlay">
              <h3>Yours best choice!</h3>
            </div>
            <img src="/images/project12-min.jpg" alt="" />
          </div>
          <div className="body">
            <h3 className="title">Interior Architecture</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
              accusamus exercitationem nam perferendis. Quia, reiciendis.
            </p>
            <a href="#">
              Read more{" "}
              <AiOutlineArrowRight
                style={{ color: "#fff" }}
                size={20}
              />{" "}
            </a>
          </div>
        </div>

        <div className="card">
          <div className="img">
            <img src="/images/project22-min.jpg" alt="" />
          </div>
          <div className="body">
            <h3 className="title">Interior Architecture</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
              accusamus exercitationem nam perferendis. Quia, reiciendis.
            </p>
            <a href="#">
              Read more{" "}
              <AiOutlineArrowRight
                size={20}
              />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
