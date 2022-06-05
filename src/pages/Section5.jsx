import React, { useState } from "react";
import France from "../assets/image/travel/france.jpg";
import London from "../assets/image/travel/london.jpg";
import London2 from "../assets/image/travel/london2.jpg";
import Pakistan from "../assets/image/travel/pakistan.jpg";
import Spain from "../assets/image/travel/spain.jpg";
import Spain2 from "../assets/image/travel/spain2.jpg";
import Switzerland from "../assets/image/travel/switzerland.jpg";
import Switzerland2 from "../assets/image/travel/switzerland2.jpg";
import Thailand from "../assets/image/travel/thailand.jpg";
import Thailand2 from "../assets/image/travel/thailand2.jpg";
import Turkey from "../assets/image/travel/turkey.jpg";
import Usa from "../assets/image/travel/usa.jpg";
//
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Section5 = () => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  const [image5, setImage5] = useState(false);
  const [image6, setImage6] = useState(false);
  const [image7, setImage7] = useState(false);
  const [image8, setImage8] = useState(false);
  const [image9, setImage9] = useState(false);
  const [image10, setImage10] = useState(false);
  const [image11, setImage11] = useState(false);
  const [image12, setImage12] = useState(false);

  return (
    <div className="section5 w-[1200px] mx-auto mt-[150px]">
      <div className="text-[24px] text-red-500">Travels Captured Images</div>
      <div className="list-img-travel flex flex-wrap pt-[50px] pb-[80px]">
        <div
          onClick={(e) => {
            setImage1(true);
          }}
          className="img-travel-item w-[25%] overflow-hidden"
          data-aos="zoom-in"
        >
          <img
            src={France}
            alt=""
            className="img-travel-item-img h-[200px] w-full"
          />
        </div>
        <div
          onClick={(e) => {
            setImage2(true);
          }}
          className="img-travel-item w-[25%] overflow-hidden"
          data-aos="zoom-in"
        >
          <img
            src={London}
            alt=""
            className="img-travel-item-img h-[200px] w-full"
          />
        </div>
        <div
          onClick={(e) => {
            setImage3(true);
          }}
          className="img-travel-item w-[25%] overflow-hidden"
          data-aos="zoom-in"
        >
          <img
            src={London2}
            alt=""
            className="img-travel-item-img h-[200px] w-full"
          />
        </div>
        <div
          onClick={(e) => {
            setImage4(true);
          }}
          className="img-travel-item w-[25%] overflow-hidden"
          data-aos="zoom-in"
        >
          <img
            src={Pakistan}
            alt=""
            className="img-travel-item-img h-[200px] w-full"
          />
        </div>
        <div
          onClick={(e) => {
            setImage5(true);
          }}
          className="img-travel-item w-[25%] overflow-hidden"
          data-aos="zoom-in"
        >
          <img
            src={Spain}
            alt=""
            className="img-travel-item-img h-[200px] w-full"
          />
        </div>
        <div
          onClick={(e) => {
            setImage6(true);
          }}
          className="img-travel-item w-[25%] overflow-hidden"
          data-aos="zoom-in"
        >
          <img
            src={Spain2}
            alt=""
            className="img-travel-item-img h-[200px] w-full"
          />
        </div>
        <div
          onClick={(e) => {
            setImage7(true);
          }}
          className="img-travel-item w-[25%] overflow-hidden"
          data-aos="zoom-in"
        >
          <img
            src={Switzerland}
            alt=""
            className="img-travel-item-img h-[200px] w-full"
          />
        </div>
        <div
          onClick={(e) => {
            setImage8(true);
          }}
          className="img-travel-item w-[25%] overflow-hidden"
          data-aos="zoom-in"
        >
          <img
            src={Switzerland2}
            alt=""
            className="img-travel-item-img h-[200px] w-full"
          />
        </div>
        <div
          onClick={(e) => {
            setImage9(true);
          }}
          className="img-travel-item w-[25%] overflow-hidden"
          data-aos="zoom-in"
        >
          <img
            src={Thailand}
            alt=""
            className="img-travel-item-img h-[200px] w-full"
          />
        </div>
        <div
          onClick={(e) => {
            setImage10(true);
          }}
          className="img-travel-item w-[25%] overflow-hidden"
          data-aos="zoom-in"
        >
          <img
            src={Thailand2}
            alt=""
            className="img-travel-item-img h-[200px] w-full"
          />
        </div>
        <div
          onClick={(e) => {
            setImage11(true);
          }}
          className="img-travel-item w-[25%] overflow-hidden"
          data-aos="zoom-in"
        >
          <img
            src={Turkey}
            alt=""
            className="img-travel-item-img h-[200px] w-full"
          />
        </div>
        <div
          onClick={(e) => {
            setImage12(true);
          }}
          className="img-travel-item w-[25%] overflow-hidden"
          data-aos="zoom-in"
        >
          <img
            src={Usa}
            alt=""
            className="img-travel-item-img h-[200px] w-full"
          />
        </div>
      </div>
      {image1 && (
        <div
          onClick={(e) => {
            setImage1(false);
          }}
          className="zoom-image"
        >
          <img
            src={France}
            alt=""
            className="zoom-image-item"
            data-aos="zoom-in"
          />
        </div>
      )}
      {image2 && (
        <div
          onClick={(e) => {
            setImage2(false);
          }}
          className="zoom-image"
        >
          <img
            src={London}
            alt=""
            className="zoom-image-item"
            data-aos="zoom-in"
          />
        </div>
      )}
      {image3 && (
        <div
          onClick={(e) => {
            setImage3(false);
          }}
          className="zoom-image"
        >
          <img
            src={London2}
            alt=""
            className="zoom-image-item"
            data-aos="zoom-in"
          />
        </div>
      )}
      {image4 && (
        <div
          onClick={(e) => {
            setImage4(false);
          }}
          className="zoom-image"
        >
          <img
            src={Pakistan}
            alt=""
            className="zoom-image-item"
            data-aos="zoom-in"
          />
        </div>
      )}
      {image5 && (
        <div
          onClick={(e) => {
            setImage5(false);
          }}
          className="zoom-image"
        >
          <img
            src={Spain}
            alt=""
            className="zoom-image-item"
            data-aos="zoom-in"
          />
        </div>
      )}
      {image6 && (
        <div
          onClick={(e) => {
            setImage6(false);
          }}
          className="zoom-image"
        >
          <img
            src={Spain2}
            alt=""
            className="zoom-image-item"
            data-aos="zoom-in"
          />
        </div>
      )}
      {image7 && (
        <div
          onClick={(e) => {
            setImage7(false);
          }}
          className="zoom-image"
        >
          <img
            src={Switzerland}
            alt=""
            className="zoom-image-item"
            data-aos="zoom-in"
          />
        </div>
      )}
      {image8 && (
        <div
          onClick={(e) => {
            setImage8(false);
          }}
          className="zoom-image"
        >
          <img
            src={Switzerland2}
            alt=""
            className="zoom-image-item"
            data-aos="zoom-in"
          />
        </div>
      )}
      {image9 && (
        <div
          onClick={(e) => {
            setImage9(false);
          }}
          className="zoom-image"
        >
          <img
            src={Thailand}
            alt=""
            className="zoom-image-item"
            data-aos="zoom-in"
          />
        </div>
      )}
      {image10 && (
        <div
          onClick={(e) => {
            setImage10(false);
          }}
          className="zoom-image"
        >
          <img
            src={Thailand2}
            alt=""
            className="zoom-image-item"
            data-aos="zoom-in"
          />
        </div>
      )}
      {image11 && (
        <div
          onClick={(e) => {
            setImage11(false);
          }}
          className="zoom-image"
        >
          <img
            src={Turkey}
            alt=""
            className="zoom-image-item"
            data-aos="zoom-in"
          />
        </div>
      )}
      {image12 && (
        <div
          onClick={(e) => {
            setImage12(false);
          }}
          className="zoom-image"
        >
          <img
            src={Usa}
            alt=""
            className="zoom-image-item"
            data-aos="zoom-in"
          />
        </div>
      )}
    </div>
  );
};

export default Section5;
