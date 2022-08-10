import React from "react";
import Footer from "../components/Footer/Footer";
import Landing from "../components/Landing/Landing";
import Navbar from "../components/Navbar/Navbar";
import Products from "../components/Products/Products";

const Home = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <Products />
      <Footer />
    </>
  );
};

export default Home;
