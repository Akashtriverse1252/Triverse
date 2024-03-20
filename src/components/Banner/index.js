import React, { useEffect, useRef, useState } from "react";
import banner_image from "../../image/BANNER IMAGE.jpg";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import SectionLayout from "../SectionLayout";
import Slider from "../Slider";

const Index = () => {
  const TextRef = useRef(null);
  const { scrollYProgress } = useScroll(TextRef);
  const Y2 = useTransform(scrollYProgress, [0, 0.7], ["0", "30px"]);
  const galref = useRef(null);
  const isInView = useInView(galref, { once: true });
  const [galClass, setGalClass] = useState(false);

  useEffect(() => {
    if (isInView) {
      setGalClass(true);
    }
  }, [isInView]);
  console.log("gallary is visible", galref);
  return (
    <>
      <SectionLayout _sclass="banner" _class="banner_scn">
        <div className="banner_cnt" ref={galref}>
          <div className="space"></div>
          <div
            className={
              galClass
                ? "home_project_image img_revealed banner_image"
                : "home_project_image"
            }
          >
            {/* <img src={banner_image} alt="banner_image" /> */}
            <Slider />
          </div>
          <div
            className="banner_text"
            data-aos="fade-up"
            data-aos-delay={500}
            data-aos-once="true"
            data-aos-duration={1000}
          >
            <p ref={TextRef} style={{ top: Y2 }}>
              Are you a brand who to wants to stand out? Redefine your values?
              Or better tell your story?
              <button>DISCUSS YOUR PROJECT</button>
            </p>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default Index;
