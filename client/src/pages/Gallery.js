import React from "react";
import Footer from "../components/Footer/Footer";
import Images from "../components/Gallery/Images";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import PageLoad from "../components/PageLoad";


const Gallery = () => {
  return (
    <PageLoad>
      <Navbar />
      <Hero title={'Gallery'} />
      <Images />
      <Footer />
    </PageLoad>
  )
}

export default Gallery