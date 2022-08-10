import React from "react";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import PageLoad from "../components/PageLoad";

const AboutUs = () => {
  return (
    <PageLoad>
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </PageLoad>
  );
};

export default AboutUs;
