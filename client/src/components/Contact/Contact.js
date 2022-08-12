import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaMailBulk } from "react-icons/fa";
import { BiMap } from "react-icons/bi";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact-us">
      <div className="container">
        <div className="info">
          <div className="col">
            <p>
              <AiOutlineMail size={20} />
              <a href="#">info@namestaj.rs</a>
            </p>
            <p>
              <AiOutlineMail size={20} />
              <a href="#">info@namestaj.rs</a>
            </p>
            <p>
              <AiOutlinePhone size={20} />
              <a href="#">+38164231986</a>
            </p>
          </div>
          <div className="col">
            <BiMap size={30} />
            <p>4564 Telephone Rd, Suite 806, Ventura CA 93003, United States</p>
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
      </div>
      <div style={{ width: "100%", height:'600px' }}>
        <iframe
          width="100%"
          height="100%"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Ulica%20Dr.%20Zorana%20Djindji%C4%87a,%20%D0%9A%D1%80%D0%B0%D0%B3%D1%83%D1%98%D0%B5%D0%B2%D0%B0%D1%86+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.maps.ie/distance-area-calculator.html">
            measure acres/hectares on map
          </a>
        </iframe>
      </div>
    </div>
  );
};

export default Contact;
