import React from "react";
import testimonial from "../../image/testimonial.jpg";
import mtestimonial from "../../image/m-testimonial.png";

const index = () => {
  return (
    <>
      <section className="quoteDIv">
        <div className="Circles" style={{ top: 929 }} />
        <img src={testimonial} alt="" className="desktop-show" />
        <img src={mtestimonial} alt="" className="mobile-show" />
        <div className="quote">
          <div
            className="quotecont "
            data-aos="fade-up"
            data-aos-delay={500}
            data-aos-once="true"
            data-aos-duration={1000}
          >
            <img src="images/quote.png" alt="" />
            <h4
              data-aos="fade-up"
              data-aos-delay={600}
              data-aos-once="true"
              data-aos-duration={1000}
              className=""
            >
              For compelling brand communication, the brands need to have a well
              thought out Brand Design language. It is our fundamental task to
              create this language, which our consumers relate to and are
              compelled to act.
            </h4>
            <h5
              data-aos="fade-up"
              data-aos-delay={700}
              data-aos-once="true"
              data-aos-duration={1000}
              className=""
            >
              Suresh Tiwari,<strong>Founder of Triverse Advertising</strong>
            </h5>
          </div>
        </div>
        <div
          className="quote2Div "
          data-aos="fade-up"
          data-aos-delay={800}
          data-aos-once="true"
          data-aos-duration={1000}
        >
          <p>
            Suresh had over 16 years of experience prior to starting Triverse,
            with accounts like Barclays Bank, British American Tobacco, Visa,
            Mars Inc., Glaxo Smithkline, Danone, etc. During his professional
            career, he spent 12 years in Grey Worldwide with initial years at
            Trikaya Grey Mumbai, followed by secondment to London and eventually
            setting up Grey Worldwide in Mauritius. Thereafter he was the
            business head of North India, based in Delhi, for SSCB Lintas.
          </p>
        </div>
      </section>
    </>
  );
};

export default index;
