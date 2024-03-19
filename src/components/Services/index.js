import React from "react";
import WebLayout from "../WebLayout";
import hoverimg from "../../image/hoverImage.jpg";

const ServiceBox = ({ title, items }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div className="box">
      <h4>{title}</h4>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className="list-item"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {item}
            <div className={`sectionOnHover ${isHovered ? "isVisible" : ""}`}>
              {/* <img src={hoverimg} alt="img" /> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Index = () => {
  return (
    <>
      <WebLayout
        _sclass="service justify-center items-center"
        _class="service_scn"
      >
        <div className="service_cnt ">
          <div className="">
            <div
              className="heading"
              data-aos="fade-in"
              data-aos-delay="500"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <h3>full service branding and digital marketing services</h3>
            </div>
            <div className="service-box">
              <ServiceBox
                title="branding"
                items={[
                  "Brand Strategy",
                  "Brand Architecture",
                  "Brand Positioning",
                  "Brand Design Language",
                ]}
              />
              <ServiceBox
                title="website"
                items={[
                  "Website Design",
                  "Website Development",
                  "SEO",
                  "Website Marketing",
                ]}
              />
              <ServiceBox
                title="digital"
                items={[
                  "Google PPC",
                  "Facebook Ads",
                  "Instagram Ads",
                  "YouTube Ads",
                ]}
              />
              <ServiceBox
                title="atl"
                items={[
                  "TV Commercials",
                  "Radio Jingles",
                  "Print Advertising",
                  "Outdoor Branding",
                ]}
              />
              <ServiceBox
                title="identity"
                items={[
                  "Logo Designing",
                  "Brand Identity",
                  "Visual Identity Manual",
                ]}
              />
              <ServiceBox
                title="social"
                items={["Social Media Marketing", "Video Marketing"]}
              />
              <ServiceBox
                title="collaterals"
                items={[
                  "Annual Report Designing",
                  "Brochure Designing",
                  "Packaging Design",
                ]}
              />
            </div>
          </div>
        </div>
      </WebLayout>
    </>
  );
};

export default Index;
