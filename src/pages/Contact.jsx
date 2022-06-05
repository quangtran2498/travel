import React from "react";
import VideoAbout from "../assets/image/video/header.mp4";
import { Link } from "react-router-dom";
import Form from "../components/Form";
//
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Contact = () => {
  return (
    <div className="contact">
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
          <div className="" data-aos="zoom-in">
            Contact
          </div>
        </div>
      </div>
      <div className="about-content w-[1200px] mx-auto flex justify-between items-center py-[100px]">
        <div className="about-content-left w-[48%]">
          <Form />
        </div>
        <div className="about-content-right w-[50%] pl-[20px]">
          <div
            className="about-content-right-title text-red-500 text-[20px] rotate-[-5deg]"
            data-aos="zoom-in"
          >
            About Us
          </div>
          <div
            className="about-content-right-heading mt-[50px] text-[40px] font-bold"
            data-aos="zoom-in"
          >
            World Best Travel Agency Company Since 2005
          </div>
          <div
            className="about-content-right-desc mt-[15px] text-[#aaaaaa]"
            data-aos="zoom-in"
          >
            Esse aliquip ea voluptate mollit fugiat nulla aliqua culpa aliqua
            pariatur quis pariatur.
          </div>
          <div className="about-content-right-btn mt-[15px]">
            <Link to="/">
              <button
                className="w-[100px] h-[40px] bg-[#333] rounded-[5px] text-white text-[14px]"
                data-aos="zoom-in"
              >
                Go Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
