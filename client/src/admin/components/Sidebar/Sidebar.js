import React from "react";
import {
  AiOutlineClose
} from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import "./sidebar.scss";

const Sidebar = ({ closeSidebar, isSidebarOpen }) => {
  const { logout } = useAuth();

  return (
    <div className={`sidebar ${isSidebarOpen && "active"}`}>
      <div className="close-menu" onClick={closeSidebar}>
        <AiOutlineClose size={25} />
      </div>
      <div className="logo">
        <span>Admin.</span>
      </div>

      <div className="menu-bar">
        <span className="bar-title">menu</span>
        <Link to="/admin" className="link">
          <RiDashboardFill size={20} />
          <span>Dashboard</span>
        </Link>
        <Link to="/admin/team" className="link">
          <RiDashboardFill size={20} />
          <span>Team</span>
        </Link>
        <Link to="/admin/gallery" className="link">
          <RiDashboardFill size={20} />
          <span>Gallery</span>
        </Link>
        <Link to="/admin/documents" className="link">
          <RiDashboardFill size={20} />
          <span>Documents</span>
        </Link>
      </div>
      <div className="footer-sidebar">
        <button to="/logout" className="link" onClick={logout}>
          <RiDashboardFill size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
