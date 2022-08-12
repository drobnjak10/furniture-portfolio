import React from "react";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import PageLoad from "../components/PageLoad";

const ContactUs = () => {
  return (
    <PageLoad>
    <Navbar />
    <Hero title={"Contact Us"} />
    <Contact />
    <Footer />
  </PageLoad>  )
}

export default ContactUs