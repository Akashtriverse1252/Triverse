// index.js (Slider component)
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import preloadImages from "./ImagePreLoader"; // Import preloadImages function
import slide1 from "../../image/slide.jpg";
import "./index.css";
import { Observer } from "gsap/Observer";
import banner_image from "../../image/banner-01.jpg";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

const NEXT = 1;
const PREV = -1;
gsap.registerPlugin(Observer);

const Slideshow = () => {
  const slides = [
    {
      id: 1,
      imageUrl: "../../image/slide.jpg",
      caption: "Slide 1 Caption",
    },
    {
      id: 2,
      imageUrl: "../../image/slide.jpg",
      caption: "Slide 2 Caption",
    },
    {
      id: 3,
      imageUrl: "../../image/slide.jpg",
      caption: "Slide 3 Caption",
    },
  ];

  const slidesRef = useRef(null);

  useEffect(() => {
    const DOM_el = slidesRef.current;

    // Initialize slideshow
    const slideshow = new SlideshowClass(DOM_el);

    // Event listeners for navigation
    const handlePrev = () => slideshow.prev();
    const handleNext = () => slideshow.next();
    document
      .querySelector(".slides-nav__item--prev")
      .addEventListener("click", handlePrev);
    document
      .querySelector(".slides-nav__item--next")
      .addEventListener("click", handleNext);

    // Initialize the GSAP Observer plugin (if needed)
    // Make sure to install the plugin and import it correctly
    // Observer.create({
    //   type: "wheel,touch,pointer",
    //   onDown: handlePrev,
    //   onUp: handleNext,
    //   wheelSpeed: -1,
    //   tolerance: 10,
    // });

    // Preload all images. Once all images are preloaded, remove the 'loading' class from the body.
    preloadImages(".slide__img").then(() =>
      document.body.classList.remove("loading")
    );

    // Cleanup function to remove event listeners
    return () => {
      document
        .querySelector(".slides-nav__item--prev")
        .removeEventListener("click", handlePrev);
      document
        .querySelector(".slides-nav__item--next")
        .removeEventListener("click", handleNext);
    };
  }, []); // Empty dependency array ensures useEffect only runs once

  return (
    <>
      <div className="slides" ref={slidesRef}>
        <div className="slide">
          {/* Render your slides here */}
          <div
            className="slide__img"
            // style={{ backgroundImage: `url(${banner_image})` }}
          >
            <img src={banner_image} alt="banner_image" />
          </div>
        </div>
        <div className="slide">
          {/* Render your slides here */}
          <div className="slide__img">
            <img src={banner_image} alt="banner_image" />
          </div>
        </div>
        <div className="deco deco--1"></div>
        <div className="deco deco--2"></div>
        <div className="deco deco--3"></div>
      </div>
      <div className="slides-nav">
        <button className="slides-nav__item slides-nav__item--prev"><SlArrowLeft /></button>
        <button className="slides-nav__item slides-nav__item--next"><SlArrowRight /></button>
      </div>
    </>
  );
};

export default Slideshow;

// SlideshowClass definition (assuming it's defined elsewhere in your project)
class SlideshowClass {
  // Class definition here

  DOM = {
    el: null,
    slides: null,
    slidesInner: null,
    deco: null,
  };

  current = 0;
  slidesTotal = 0;
  isAnimating = false;

  constructor(DOM_el) {
    this.DOM.el = DOM_el;
    this.DOM.slides = [...this.DOM.el.querySelectorAll(".slide")];
    this.DOM.slidesInner = this.DOM.slides.map((item) =>
      item.querySelector(".slide__img")
    );

    this.DOM.slides[this.current].classList.add("slide--current");
    this.slidesTotal = this.DOM.slides.length;
    this.DOM.deco = this.DOM.el.querySelectorAll(".deco");
  }

  next() {
    this.navigate(NEXT);
  }

  prev() {
    this.navigate(PREV);
  }

  navigate(direction) {
    if (this.isAnimating) return false;
    this.isAnimating = true;

    const previous = this.current;
    this.current =
      direction === 1
        ? this.current < this.slidesTotal - 1
          ? ++this.current
          : 0
        : this.current > 0
        ? --this.current
        : this.slidesTotal - 1;

    const currentSlide = this.DOM.slides[previous];
    const currentInner = this.DOM.slidesInner[previous];
    const upcomingSlide = this.DOM.slides[this.current];
    const upcomingInner = this.DOM.slidesInner[this.current];

    this.tl = gsap
      .timeline({
        defaults: {
          duration: 0.6,
        },
        onStart: () => {
          this.DOM.slides[this.current].classList.add("slide--current");
        },
        onComplete: () => {
          this.DOM.slides[previous].classList.remove("slide--current");
          this.isAnimating = false;
        },
      })
      .addLabel("start", 0)
      .to(
        currentSlide,
        {
          duration: 0.2,
          ease: "power2.in",
          xPercent: -direction * 100,
        },
        "start"
      )
      .to(
        currentInner,
        {
          duration: 0.2,
          ease: "power2.in",
          xPercent: direction * 75,
          rotation: -direction * 6,
        },
        "start"
      )
      .fromTo(
        this.DOM.deco,
        {
          xPercent: direction * 100,
          autoAlpha: 1,
        },
        {
          duration: 0.2,
          ease: "power2.in",
          xPercent: 0,
        },
        "start"
      );
    [...this.DOM.deco].forEach((_, pos, arr) => {
      this.tl.to(
        arr[arr.length - 1 - pos],
        {
          ease: "power4",
          xPercent: -direction * 100,
        },
        `start+=${(pos + 1) * 0.2}`
      );
    });
    this.tl
      .addLabel("middle", "<")
      .fromTo(
        upcomingSlide,
        {
          autoAlpha: 1,
          xPercent: direction * 100,
        },
        {
          ease: "power4",
          xPercent: 0,
        },
        "middle"
      )
      .fromTo(
        upcomingInner,
        {
          xPercent: -direction * 75,
          rotation: direction * 6,
        },
        {
          ease: "power4",
          xPercent: 0,
          rotation: 0,
        },
        "middle"
      );
  }
}
