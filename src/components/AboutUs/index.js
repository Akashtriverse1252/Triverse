import React, { useRef, useState } from "react";
import { useEffect } from "react";
import WebLayout from "../WebLayout";

const Index = () => {
  useEffect(() => {
    let t,
      n = 0;

    const i = () => {
      clearInterval(t);
      t = setInterval(() => {
        const titles = document.querySelectorAll(".DefaultPage2AboutTitle");
        titles.forEach((title) => title.classList.add("DisplayNone"));
        titles[n].classList.remove("DisplayNone");
        n = (n + 1) % titles.length;
      }, 400);
    };

    i();

    return () => {
      clearInterval(t);
    };
  }, []);
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);

  const toggleReadMore = () => {
    setIsReadMoreOpen(!isReadMoreOpen);
  };
  return (
    <>
      <WebLayout _sclass="about_us" _class="about_us_scn">
        <div className="about_us_cnt flex ">
          <div className="DefaultPage2S1 ">
            <div className="DefaultPage2S1Inner">
              <div className="OrangeRectangle "></div>
            </div>
            <div className="DefaultPage2S1Container">
              <div
                className="DefaultPage2AboutTitle DisplayNone"
                data-index={0}
              >
                <h3 className="font-normal">Trendy</h3>
              </div>
              <div
                className="DefaultPage2AboutTitle DisplayNone"
                data-index={1}
              >
                <h3 className="font-normal">Branding</h3>
              </div>
              <div
                className="DefaultPage2AboutTitle DisplayNone"
                data-index={2}
              >
                <h3 className="font-normal">Responsive</h3>
              </div>
              <div
                className="DefaultPage2AboutTitle DisplayNone"
                data-index={3}
              >
                <h3 className="font-normal">Design</h3>
              </div>
              <div
                className="DefaultPage2AboutTitle DisplayNone"
                data-index={4}
              >
                <h3 className="font-normal">Fast</h3>
              </div>
              <div
                className="DefaultPage2AboutTitle DisplayNone"
                data-index={5}
              >
                <h3 className="font-normal">Creative</h3>
              </div>
              <div
                className="DefaultPage2AboutTitle DisplayNone"
                data-index={6}
              >
                <h3 className="font-normal">Quality</h3>
              </div>
              <div
                className="DefaultPage2AboutTitle DisplayNone"
                data-index={7}
              >
                <h3 className="font-normal">Social</h3>
              </div>
              <div
                className="DefaultPage2AboutTitle DisplayNone"
                data-index={8}
              >
                <h3 className="font-normal">Website</h3>
              </div>
              <div
                className="DefaultPage2AboutTitle DisplayNone"
                data-index={9}
              >
                <h3 className="font-normal">Advertising</h3>
              </div>
              <div
                className="DefaultPage2AboutTitle DisplayNone"
                data-index={10}
              >
                <h3 className="font-normal">Proposition</h3>
              </div>
              <div
                className="DefaultPage2AboutTitle DisplayNone"
                data-index={11}
              >
                <h3 className="font-normal">Value</h3>
              </div>
              <div
                className="DefaultPage2AboutTitle DisplayNone"
                data-index={12}
              >
                <h3 className="font-normal">Custom</h3>
              </div>
              <div
                className="DefaultPage2AboutTitle DisplayNone"
                data-index={13}
              >
                <h3 className="font-normal">Packaging</h3>
              </div>
              <div className="DefaultPage2AboutTitle" data-index={14}>
                <h3 className="font-normal">Strategy</h3>
              </div>
            </div>
          </div>
          <div className="DefaultPage2S2 ">
            <div className="DefaultPage2S2Inner ">
              <div
                className="about_title"
                data-aos="fade-up"
                data-aos-delay={500}
                data-aos-once="true"
                data-aos-duration={1000}
              >
                <h3>Top brand creative agency based in gurgaon</h3>
                <div className="Line " />
              </div>
              <div className="SpecialDesc floatL Width100">
                <p
                  data-aos="fade-up"
                  data-aos-delay={500}
                  data-aos-once="true"
                  data-aos-duration={1000}
                  className="about_us_cnt"
                >
                  As a full-service brand and design agency, Triverse
                  Advertising offers everything from digital content and brand
                  strategy to packaging and collateral design.
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-delay={600}
                  data-aos-once="true"
                  data-aos-duration={1100}
                  className="about_us_cnt2"
                >
                  Since 2008, we’ve been bringing storytelling, strategy and
                  compelling visual design together, to devise approaches
                  specific to each brand. Triverse Advertising helps in creating
                  powerful new brands or rejuvenating existing brands.
                </p>
                <p
                  className=""
                  style={{ display: isReadMoreOpen ? "inline" : "none" }}
                >
                  We’re open-minded, our clients come from all sectors, from
                  family-run businesses to global corporates and everything in
                  between. It keeps us fresh and the work interesting.
                </p>
                <p
                  className=""
                  style={{ display: isReadMoreOpen ? "inline" : "none" }}
                >
                  We are small with big agency expertise. We evolve quickly and
                  are able to balance fast turnaround time with personal
                  attention to all our clients. A team of multi-skilled
                  individuals means smaller team on each project which
                  translates into better value for you.
                </p>
                <p
                  className=""
                  style={{ display: isReadMoreOpen ? "inline" : "none" }}
                >
                  In a short period of time we became one of the top advertising
                  agencies in Gurgaon, Delhi NCR. We look forward to being your
                  trusted creative partner.
                </p>
              </div>
              <div
                className="floatL Width100 "
                data-aos="fade-right"
                data-aos-delay={500}
                data-aos-once="true"
                data-aos-duration={1000}
              >
                <div className="SpecialLink IWantAMouseOVerNowBut75">
                  <a
                    title="More About US"
                    className="aboutshow font-normal uppercase text-[15px]"
                    onClick={toggleReadMore}
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WebLayout>
    </>
  );
};

export default Index;
