import React from "react";
import banner_image from "../../image/BANNER IMAGE.jpg";
import SectionLayout from "../SectionLayout";
import Slider from "../Slider";

const index = () => {
  return (
    <>
      <SectionLayout _sclass="banner" _class="banner_scn">
        <div className="banner_cnt">
          <div className="space"></div>
          <div className="banner_image">
            {/* <img src={banner_image} alt="banner_image" /> */}
            <Slider />
          </div>
          <div className="banner_text">
            <p>
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

export default index;
