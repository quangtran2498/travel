import React from "react";
import "../style/Header.css";

const Header = () => {
  return (
    <div className="header relative">
      <div className="overlay absolute"></div>

      <div className="img-intro "></div>
      <div className="header-heading absolute items-center z-10 top-[40%] left-[30%]">
        <div className="text-white">
          <div
            className="header-title font-bold text-[45px] uppercase"
            data-aos="zoom-in"
          >
            Traveling Website
          </div>
          <div
            className="header-heading font-medium text-[16px] pb-[10px]"
            data-aos="zoom-in"
          >
            Design with ReactJS no Framework by Dino Dev
          </div>
          <button className="header-modal " data-aos="zoom-in">
            Let's Start!
          </button>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default Header;
