import React, { useState } from "react";
import "../style/Header.css";
import VideoAbout from "../assets/image/video/header.mp4";
import FormRigister from "./FormRigister";
import FormLogin from "./FormLogin";

const Header = () => {
  const [hideFormRigister, setHideFormRigister] = useState(false);
  const [hideFormLogin, setHideFormLogin] = useState(false);

  const handleShowFormRigister = () => {
    setHideFormRigister(true);
  };
  //
  const handleShowFormLogin = () => {
    setHideFormLogin(true);
    setHideFormRigister(false);
  };
  //
  const handleHideFormRigister = () => {
    setHideFormRigister(false);
  };
  //
  const handleHideFormLogin = () => {
    setHideFormLogin(false);
  };
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
            <button
              onClick={handleShowFormRigister}
              className="header-modal "
              data-aos="zoom-in"
            >
              Let's Start!
            </button>
          </div>
        </div>
      </div>
      {hideFormRigister && (
        <FormRigister
          hideFormRigister={handleHideFormRigister}
          showFormLogin={handleShowFormLogin}
        />
      )}
      {hideFormLogin && (
        <FormLogin
          hideModalFormLogin={handleHideFormLogin}
          showFormRigisterToLogin={handleShowFormRigister}
        />
      )}
    </div>
  );
};

export default Header;
