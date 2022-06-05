import React from "react";
import "../style/Footer.css";
import logo from "../assets/image/footer/logo.png";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
//
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Footer = () => {
  return (
    <div>
      <div className="footer-bg pt-[100px]">
        <div className="w-[1200px] mx-auto bg-white ">
          <div className="flex justify-between pt-[50px] px-[30px] pb-[50px]">
            <div className="footer-left w-[50%] pr-[150px] pl-[15px]">
              <div className="logo-footer">
                <img
                  src={logo}
                  alt=""
                  className="w-[150px]"
                  data-aos="zoom-in"
                />
              </div>
              <div
                className="footer-decs text-[#aaaaaa] mt-[30px]"
                data-aos="zoom-in"
              >
                Travel friends is a traveling agency, we arrange tours to the
                world famous and most beautiful countries, Since 2005 we privde
                high quality servies to our vaulable customers.
              </div>
            </div>
            <div className="footer-right w-[50%] flex justify-between px-[15px]">
              <div className="footer-pages px-[15px]">
                <div className="uppercase font-bold " data-aos="zoom-in">
                  pages
                </div>
                <Link to="/">
                  <div
                    className="footer-page text-[12px] text-[#aaaaaa] mt-[20px]"
                    data-aos="zoom-in"
                  >
                    <MdKeyboardArrowRight className="inline mr-[5px]" />
                    Home
                  </div>
                </Link>
                <Link to="/about">
                  <div
                    className="footer-page text-[12px] text-[#aaaaaa] mt-[20px]"
                    data-aos="zoom-in"
                  >
                    <MdKeyboardArrowRight className="inline mr-[5px]" />
                    About
                  </div>
                </Link>
                <Link to="/contact">
                  <div
                    className="footer-page text-[12px] text-[#aaaaaa] mt-[20px]"
                    data-aos="zoom-in"
                  >
                    <MdKeyboardArrowRight className="inline mr-[5px]" />
                    Contact
                  </div>
                </Link>
              </div>
              <div className="partners px-[15px]">
                <div className="uppercase font-bold" data-aos="zoom-in">
                  partners
                </div>

                <a href="https://www.booking.com">
                  <div
                    className="footer-page text-[12px] text-[#aaaaaa] mt-[20px] capitalize"
                    data-aos="zoom-in"
                  >
                    <MdKeyboardArrowRight className="inline mr-[5px]" />
                    booking
                  </div>
                </a>
                <a href="https://www.trivago.com">
                  <div
                    className="footer-page text-[12px] text-[#aaaaaa] mt-[20px] capitalize]"
                    data-aos="zoom-in"
                  >
                    <MdKeyboardArrowRight className="inline mr-[5px]" />
                    trivago
                  </div>
                </a>
                <a href="/https://www.hostelworld.com/">
                  <div
                    className="footer-page text-[12px] text-[#aaaaaa] mt-[20px] capitalize"
                    data-aos="zoom-in"
                  >
                    <MdKeyboardArrowRight className="inline mr-[5px]" />
                    hostel world
                  </div>
                </a>
                <a href="https://www.tripadvisor.com/">
                  <div
                    className="footer-page text-[12px] text-[#aaaaaa] mt-[20px] capitalize"
                    data-aos="zoom-in"
                  >
                    <MdKeyboardArrowRight className="inline mr-[5px]" />
                    trip advisor
                  </div>
                </a>
              </div>
              <div className="destinations px-[15px]">
                <div className="uppercase font-bold" data-aos="zoom-in">
                  destinations
                </div>

                <Link to="/locations/1">
                  <div
                    className="footer-page text-[12px] text-[#aaaaaa] mt-[20px] capitalize"
                    data-aos="zoom-in"
                  >
                    <MdKeyboardArrowRight className="inline mr-[5px]" />
                    UK
                  </div>
                </Link>
                <Link to="/locations/2">
                  <div
                    className="footer-page text-[12px] text-[#aaaaaa] mt-[20px] capitalize"
                    data-aos="zoom-in"
                  >
                    <MdKeyboardArrowRight className="inline mr-[5px]" />
                    USA
                  </div>
                </Link>
                <Link to="/locations/3">
                  <div
                    className="footer-page text-[12px] text-[#aaaaaa] mt-[20px] capitalize"
                    data-aos="zoom-in"
                  >
                    <MdKeyboardArrowRight className="inline mr-[5px]" />
                    Thailand
                  </div>
                </Link>
                <Link to="/locations/4">
                  <div
                    className="footer-page text-[12px] text-[#aaaaaa] mt-[20px] capitalize"
                    data-aos="zoom-in"
                  >
                    <MdKeyboardArrowRight className="inline mr-[5px]" />
                    Spain
                  </div>
                </Link>
                <Link to="/locations/5">
                  <div
                    className="footer-page text-[12px] text-[#aaaaaa] mt-[20px] capitalize"
                    data-aos="zoom-in"
                  >
                    <MdKeyboardArrowRight className="inline mr-[5px]" />
                    Pakistan
                  </div>
                </Link>
                <Link to="/locations/6">
                  <div
                    className="footer-page text-[12px] text-[#aaaaaa] mt-[20px] capitalize"
                    data-aos="zoom-in"
                  >
                    <MdKeyboardArrowRight className="inline mr-[5px]" />
                    France
                  </div>
                </Link>
                <Link to="/locations/7">
                  <div
                    className="footer-page text-[12px] text-[#aaaaaa] mt-[20px] capitalize"
                    data-aos="zoom-in"
                  >
                    <MdKeyboardArrowRight className="inline mr-[5px]" />
                    Switzerland
                  </div>
                </Link>
                <Link to="/locations/8">
                  <div
                    className="footer-page text-[12px] text-[#aaaaaa] mt-[20px] capitalize"
                    data-aos="zoom-in"
                  >
                    <MdKeyboardArrowRight className="inline mr-[5px]" />
                    Turkey
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="footer-copy-right" data-aos="zoom-in">
            © Copy Right Dino Dev 2022
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
