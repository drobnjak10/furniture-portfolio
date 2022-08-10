import React from "react";
import { FaFacebookF, FaInstagram, FaMailBulk } from "react-icons/fa";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="col">
            <h3>Alexandary Murray</h3>
            <p>
              {" "}
              Accompany us on our endless search to unearth Scotland's finest
              the Alexander Murray philosophy and standards.
            </p>
          </div>
          <div className="col contact">
            <h3>Contact Us</h3>
            <p>
              T:
              <a href="#"> +381 (0)34 35 66 80</a>
            </p>
            <p>
              Email: <a href="#">email@email.rs</a>
            </p>
            <div className="address">
              JELOFINA doo - Direkcija Bulevar Kraljice Marije 54N, Kragujevac,
              Srbija
            </div>
          </div>
          <div className="col">
            <h3>Follow Us:</h3>
            <div className="icons">
              <a href="#">
                <FaFacebookF className="i" />
              </a>
              <a href="#">
                <FaInstagram className="i" />
              </a>
              <a href="#">
                <FaMailBulk className="i" />
              </a>
            </div>
          </div>
        </div>
        <div className="middle"></div>
        <div className="bottom">
          <h3>Alexander Murray</h3>
          <p className="copy">
            © 2015 JELOFINA. All Rights Reserved. Developed by{" "}
            <a href="#">studiopetrov.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
