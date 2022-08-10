import React from "react";
import Footer from "../components/Footer/Footer";
import Landing from "../components/Landing/Landing";
import Navbar from "../components/Navbar/Navbar";
import PageLoad from "../components/PageLoad";
import Products from "../components/Products/Products";

const Home = () => {
  return (
    <PageLoad>
      <Navbar />
      <Landing />
      <Products />
      <Footer />
    </PageLoad>
  );
};

export default Home;
