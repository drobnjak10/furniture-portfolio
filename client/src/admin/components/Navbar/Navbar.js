import React from "react";
import "./navbar.scss";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = ({ openSidebar }) => {
  return (
      <div className="navbar-admin">
        <span className="menu-btn-admin" onClick={openSidebar}>
          <AiOutlineMenu size={30} />
        </span>
      </div>
  );
};

export default Navbar;