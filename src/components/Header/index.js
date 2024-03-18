import React from "react";
import Logo from "../SVG/Logo";
import "./header.css";

const index = () => {
  return (
    <header>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="header_cnt flex justify-between items-baseline    ">
              <div className="logo">
                <Logo />
              </div>
              <a href="#" className="get_connect">
                <div className="header_cnt_cnt">
                  <span> GET IN TOUCH</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default index;
