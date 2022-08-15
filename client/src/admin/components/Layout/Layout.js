import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="wrapper">
      <Sidebar closeSidebar={closeSidebar} isSidebarOpen={isSidebarOpen} />
      <div className="content">
        <Navbar openSidebar={openSidebar} />
        {children}
      </div>
    </div>
  );
};

export default Layout;