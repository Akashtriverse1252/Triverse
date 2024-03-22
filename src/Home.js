import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Quote from "./components/Quote";
import FAQ from "./components/FAQ/index";
import SlidingSection from "./components/SlidingSection";
import Banner from "./components/Banner";
import Loader from "./components/Loader";

const Home = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll().default;

    // Update scroll position on hash change
    window.addEventListener("hashchange", () => {
      scroll.scrollTo(window.location.hash);
    });

    // Clean up
    // return () => {
    //   scroll.destroy();
    // };
  }, []);

  return (
    <>
      {/* <Loader /> */}
      <Header />
      <Banner />
      <div className="furtherSection z-10 relative">
        <div className="spaceForBannner mt-[100vh]"></div>
        <div className="bg-white main_container_of_element" ref={scrollRef}>
          <AboutUs />
          <SlidingSection />
          <Services />
          <Quote />
          <FAQ />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
