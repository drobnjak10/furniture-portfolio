import React from "react";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import PageLoad from "../components/PageLoad";
import Reference from "../components/References/Reference";

const References = () => {
  return (
    <PageLoad>
      <Navbar />
      <Hero title={"References"} />
      <Reference />
      <Footer />
    </PageLoad>
  );
};

export default References;
