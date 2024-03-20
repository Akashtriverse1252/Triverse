import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Quote from "./components/Quote";
import FAQ from "./components/FAQ/index";
import SlidingSection from "./components/SlidingSection";
import Banner from "./components/Banner";
import HoverPictureEffect from "./components/HoverPictureEffect";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <div className="furtherSection bg-white z-10 relative">
        <div className="spaceForBannner mt-[100vh]"></div>
        <AboutUs />
        <SlidingSection />
        <Services />
        <Quote />
        <FAQ />
        <Footer />
      </div>
    </>
  );
};

export default Home;
