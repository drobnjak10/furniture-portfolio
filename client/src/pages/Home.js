import React from "react";
import Partners from "../components/Clients/Partners";
import Footer from "../components/Footer/Footer";
import Landing from "../components/Landing/Landing";
import Mission from "../components/Mission/Mission";
import Navbar from "../components/Navbar/Navbar";
import PageLoad from "../components/PageLoad";
import Products from "../components/Products/Products";
import Services from "../components/Services/Services";
import Team from "../components/Team/Team";

const Home = () => {
  return (
    <PageLoad>
      <Navbar />
      <Landing />
      <Services />
      <Mission />
      <Products />
      <Team />
      <Partners />
      <Footer />
    </PageLoad>
  );
};

export default Home;
