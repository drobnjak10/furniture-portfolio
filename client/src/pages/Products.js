import React from "react";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import PageLoad from "../components/PageLoad";
import ProductList from "../components/Products/ProductList";

const Products = () => {
  return (
    <PageLoad>
      <Navbar />
      <Hero title={"Products"} />
      <ProductList />
      <Footer />
    </PageLoad>
  );
};

export default Products;
