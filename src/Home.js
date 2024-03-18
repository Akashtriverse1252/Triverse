import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Quote from "./components/Quote";
import FAQ from "./components/FAQ/index";
import Banner from "./components/Banner";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <AboutUs />
      <Services />
      <Quote />
      <FAQ />

      {/* <Footer /> */}
    </>
  );
};

export default Home;
