import React, { useRef, useState } from "react";
import Logo from "../assets/image/header/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  const [onOverlay, setOnOverlay] = useState(false);
  const showMenu = useRef();
  const handleShowMenu = () => {
    showMenu.current.style.right = 0;
    setOnOverlay(true);
  };
  const handleHideMenu = () => {
    showMenu.current.style.right = "-400px";
    setOnOverlay(false);
  };
  const handleHideOverlay = () => {
    showMenu.current.style.right = "-400px";
    setOnOverlay(false);
  };
  return (
    <div className="flex w-[1400px] justify-between pt-[20px] pr-[50px] right-0 absolute z-50">
      {onOverlay && (
        <div onClick={handleHideOverlay} className="on-overlay"></div>
      )}
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="" className="w-[150px] z-10" />
        </Link>
      </div>
      <div onClick={handleShowMenu} className="menu cursor-pointer">
        <GiHamburgerMenu className="text-[35px] text-pink-500" />
      </div>
      <div
        ref={showMenu}
        className="menu-window absolute bg-white top-[0] w-[320px] h-[100vh] right-[-400px] flex items-center justify-end z-50"
      >
        <AiOutlineClose
          onClick={handleHideMenu}
          className="absolute right-[30px] top-[80px] text-red-500 text-[40px] cursor-pointer"
        />
        <div className="h-fit  text-right w-full">
          <Link className="" to="/">
            <div className="menu-page text-[20px]  capitalize py-[15px] pr-[30px]">
              home
            </div>
          </Link>
          <Link className=" " to="/about">
            <div className="menu-page text-[20px]  capitalize py-[15px] pr-[30px]">
              about
            </div>
          </Link>
          <Link className="" to="/contact">
            <div className="menu-page text-[20px]  capitalize py-[15px] pr-[30px]">
              contact
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
