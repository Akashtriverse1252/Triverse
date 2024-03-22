import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import "./index.css";
import image1 from "../../image/banner-01.jpg";
const TrackAnimation = () => {
  const controls = useAnimation();
  const bannerRef = useRef(null);
  const { scrollYProgress } = useScroll(bannerRef, {
    damping: 100,
    inertia: 10,
  });
  const Y2 = useTransform(scrollYProgress, [0.3, 1], ["15%", "-750%"]);

  const data = [
    {
      title: "Plumber",
      subtitle: "Branding, Website, Digital",
      date: "January 1, 2021",
      image: "http://assurelp.triverseadvertising.com/images/Plumber.webp",
      link: "#",
    },
    {
      title: "premier energies",
      subtitle: "Branding, Website, Digital",
      date: "January 1, 2022",
      image: "http://assurelp.triverseadvertising.com/images/premier.webp",
      link: "#",
    },
    {
      title: "RED COW",
      subtitle: "Branding, Website, Digital",
      date: "January 1, 2022",
      image: "http://assurelp.triverseadvertising.com/images/prodct.webp",
      link: "",
    },
    {
      title: "Assure Pathlabs",
      subtitle: "Branding, Website, Digital",
      date: "January 1, 2021",
      image: "http://assurelp.triverseadvertising.com/images/ASSURE.webp",
      link: "#",
    },
    {
      title: "SATYA GRUOP",
      subtitle: "Branding, Website, Digital",
      date: "January 1, 2022",
      image: "http://assurelp.triverseadvertising.com/images/satya.webp",
      link: "#",
    },
    {
      title: "SS GROUP",
      subtitle: "Branding, Website, Digital",
      date: "January 1, 2022",
      image: "http://assurelp.triverseadvertising.com/images/ss-group.webp",
      link: "#",
    },
  ];

  return (
    <div className="track_container">
      <div className="track" data-w-id="2d6d4957-6421-3a25-7127-cfa391ceb838">
        <div className="sticky">
          <div className="container">
            <div
              className="heading"
              data-aos="fade-in"
              data-aos-delay="500"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <h3>Showcase</h3>
            </div>
            <div className="margin-30">
              <div className="wrapper" ref={bannerRef}>
                <motion.div
                  className="collection-list"
                  initial="hidden"
                  style={{ left: Y2 }}
                >
                  {data.map((item, index) => (
                    <div key={index} className="collection-item">
                      <div className="collection-list-wrapper w-dyn-list">
                        <div role="list" className="w-dyn-items">
                          <div role="listitem" className="w-dyn-item">
                            <a
                              data-w-id={`item-link-${index}`} // You may want to generate unique ids here
                              href={item.link}
                              className="portfolio-wrapper w-inline-block"
                            >
                              <div className="project-image-wrapper">
                                <img
                                  src={item.image}
                                  alt=""
                                  className="image-3"
                                />
                              </div>
                              {/* <div className="view-projects-wrapper">
                                <div className="text-block-9">
                                  View Projects
                                </div>
                              </div> */}
                              <div className="project-details-wrapper">
                                <h1 className="details_title text-[38px] font-GaramondPro font-normal text-white uppercase  tracking-widest">
                                  {item.title}
                                </h1>
                                <div className="details_subtitle font-GaramondPro font-normal text-white text-[20px]">
                                  {item.subtitle}
                                </div>
                                <div className="details_date text-[14px] font-poppins font-normal text-white">
                                  {item.date}
                                </div>
                              </div>
                              <div style={{ opacity: 1 }} className="overlay" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackAnimation;
