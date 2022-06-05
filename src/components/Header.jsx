import React from "react";
import "../style/Header.css";
import VideoAbout from "../assets/image/video/header.mp4";

const Header = () => {
  return (
    <div className="header relative">
      <div className="about-video relative">
        <div className="overlay absolute"></div>
        <video
          src={VideoAbout}
          autoPlay
          loop
          muted
          className=" w-[100vw] h-[100vh] object-cover "
        ></video>
        <div className="text-[40px] font-bold uppercase absolute top-0 w-full h-full flex justify-center items-center text-white z-10">
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
      </div>
    </div>
  );
};

export default Header;
