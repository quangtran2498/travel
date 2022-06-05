import React, { useState, useEffect } from "react";
import { BsClock } from "react-icons/bs";
import { GiCheckMark } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
//
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const CardCity = ({ data }) => {
  const [checkRoomFail, setCheckRoomFail] = useState(true);
  const [checkRoomSuccess, setCheckRoomSuccess] = useState(
    data.attributes.room
  );
  const [checkFoot, setCheckFoot] = useState(true);
  const [checkFootSuccess, setCheckFootSuccess] = useState(
    data.attributes.foot
  );
  console.log("checkRoomSuccess :", checkRoomSuccess);
  console.log("checkRoomFail:", checkRoomFail);

  //
  // console.log(checkFootSuccess);

  // useEffect(() => {
  //   const abc = () => {
  //     alert("quang");
  //   };
  //   abc();
  // }, []);
  useEffect(() => {
    if (checkRoomSuccess === true) {
      setCheckRoomFail(false);
    }
  }, [checkRoomSuccess]);

  useEffect(() => {
    if (checkFootSuccess === true) {
      setCheckFoot(false);
    }
  }, [checkFootSuccess]);

  //   console.log(data.attributes?.image?.data?.attributes?.url);
  console.log(data);
  const imageCity = `http://localhost:1337${data.attributes?.image?.data?.attributes?.url}`;
  return (
    <div className=" p-[10px] bg-white w-[30%] rounded-[10px] ">
      <div className="card-city-header overflow-hidden">
        <img
          src={imageCity}
          alt=""
          className="card-city-header-image w-[220px] h-[200px] rounded-t-[10px]"
          data-aos="zoom-in"
        />
      </div>
      <div className="flex justify-between pt-[10px]">
        <div className="capitalize" data-aos="zoom-in">
          {data.attributes.city}
        </div>
        <div className="flex items-center">
          <BsClock
            className="text-pink-500 font-bold mr-[5px]"
            data-aos="zoom-in"
          />
          <p className="time" data-aos="zoom-in">
            {data.attributes.time}days
          </p>
        </div>
      </div>
      <div className="price font-bold text-[20px] mt-[10px]" data-aos="zoom-in">
        ${data.attributes.price}.00
      </div>
      <div
        className="room flex justify-between items-center mt-[10px]"
        data-aos="zoom-in"
      >
        <p className="room  text-[18px]" data-aos="zoom-in">
          Room
        </p>
        {checkRoomSuccess && (
          <GiCheckMark
            className="text-14px] text-green-400"
            data-aos="zoom-in"
          />
        )}
        {checkRoomFail && (
          <VscChromeClose
            className="text-red-500 text-[14px]"
            data-aos="zoom-in"
          />
        )}
      </div>
      <div
        className="foot flex justify-between items-center mt-[10px]"
        data-aos="zoom-in"
      >
        <p className="room  text-[18px]" data-aos="zoom-in">
          Foot
        </p>
        {checkFootSuccess && (
          <GiCheckMark
            className="text-14px] text-green-400"
            data-aos="zoom-in"
          />
        )}
        {checkFoot && (
          <VscChromeClose
            className="text-red-500 text-[14px]"
            data-aos="zoom-in"
          />
        )}
      </div>
      <button
        className="btn-buy w-[100px] h-[40px] bg-[#333] text-white text-[16px] rounded-[5px] mt-[10px]"
        data-aos="zoom-in"
      >
        Buy now
      </button>
      .
    </div>
  );
};

export default CardCity;
