import React from "react";
import ContainerLayout from "../ContainerLayout";
import "../Footer/footer.css";
import footerelement from "../../image/footer-icon.png";

const index = () => {
  return (
    <ContainerLayout>
      <div className="footerstn">
        <div className="footerrow">
          <div
            className="footercol "
            data-aos="fade-left"
            data-aos-delay={500}
            data-aos-once="true"
            data-aos-duration={1000}
          >
            <h3>for career</h3>
            <p>
              mail your resume to -
              <a href="mailto:triverse@triverseadvertising.com">
                triverse@triverseadvertising.com
              </a>
            </p>
          </div>
          <div
            className="footercol "
            data-aos="fade-right"
            data-aos-delay={500}
            data-aos-once="true"
            data-aos-duration={1000}
          >
            <h3>for business</h3>
            <p>
              drop a line to meenakshi -
              <a href="mailto:meenakshi@triverseadvertising.com">
                meenakshi@triverseadvertising.com
              </a>
            </p>
            <div></div>
          </div>
        </div>
        <div
          className="footeraddress "
          data-aos="fade-up"
          data-aos-delay={500}
          data-aos-once="true"
          data-aos-duration={1000}
        >
          <img src={footerelement} />
          <h4>triverse advertising pvt ltd.</h4>
          <p>18, e-6, arjun marg, dlf phase 1, gurugram, delhi ncr</p>
        </div>
        <p className="copyright">2024 © All rights reserved </p>
      </div>
    </ContainerLayout>
  );
};

export default index;
