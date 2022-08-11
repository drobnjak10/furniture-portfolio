import React, { useRef, useState } from "react";
import "./navbar.scss";
import { FaBars, FaFacebookF, FaInstagram, FaMailBulk } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { GoMail } from "react-icons/go";
import { Link } from "react-router-dom";
import { useIsInViewport } from "../../hooks/useInViewport";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`navbar`}>
      <div className={`menu-bar ${isActive && "active"}`}>
        <div className="list">
          <div className="list-title">Menu</div>
          <div className="line"></div>
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/about" className="link">
            About
          </Link>
          <div className="link">Services</div>
          <div className="link">FAQ</div>
          <div className="link">Contact</div>
        </div>
      </div>
      <div className="navbar-container">
        <div className="menu" onClick={() => setIsActive(!isActive)}>
          {!isActive && (
            <>
              <div className="icon">
                <FaBars className="mn" color={"#fff"} />
              </div>
              <span>Menu</span>
            </>
          )}
          {isActive && (
            <>
              <div className="icon">
                <AiOutlineClose className="mn" color={"#fff"} />
              </div>
              <span>Close</span>
            </>
          )}
        </div>
        <div className="logo">
          <span>Alexandar Murray</span>
        </div>
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
  );
};

export default Navbar;
