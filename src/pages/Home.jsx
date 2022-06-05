import React, { useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Article from "./Article";
import "../style/Home.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import User1 from "../assets/image/rewiews-user/user1.jpg";
import User2 from "../assets/image/rewiews-user/user2.jpg";
import User3 from "../assets/image/rewiews-user/user3.jpg";
import User4 from "../assets/image/rewiews-user/user4.jpg";
import User5 from "../assets/image/rewiews-user/user5.jpg";
import User6 from "../assets/image/rewiews-user/user6.jpg";
import User7 from "../assets/image/rewiews-user/user7.jpg";
import User8 from "../assets/image/rewiews-user/user8.jpg";
import User9 from "../assets/image/rewiews-user/user9.jpg";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

//
import Header from "../components/Header";
import Section5 from "./Section5";

AOS.init();
const Home = () => {
  const [panal, setPanal] = useState(false);
  const [panal2, setPanal2] = useState(false);
  const [panal3, setPanal3] = useState(false);
  const [panal4, setPanal4] = useState(false);

  return (
    <div className="">
      <Header />
      <div className="w-[1200px] mx-auto mt-[50px]" data-aos="zoom-in">
        <div className="home-section1 flex justify-around">
          <div className="section1-left text-[24px] text-[#313] mt-[35px] w-[40%] font-medium">
            <div className="w-[65%]">
              Discover the most engaging places in the world with Travel Friends
            </div>
          </div>
          <div
            className="section1-right text-[#aaa] text-[18px] w-[60%] pr-[100px]"
            data-aos="zoom-in"
          >
            Travel is a brutality. It forces you to trust strangers and to lose
            sight of all that familiar comforts of home and friends.You are
            constantly of balance. Nothing is yours except the essential things
            Air, Sleep, Dream, the sea, the sky-all things tending towards the
            eternal or what we imagine of it.
          </div>
        </div>
        <Article />
      </div>
      <div className="section3 ">
        <div className="section3-container flex justify-between w-[1200px] mx-auto">
          <div className="section3-left w-[50%] pr-[180px] ">
            <div className="section3-left-heading" data-aos="zoom-in">
              Why Customers Love Travel Friends ? Because We Love Gang Bang
            </div>
            <div
              className="section3-left-paragraph mt-[40px]"
              data-aos="zoom-in"
            >
              Our aim is to provide professional and unique services to
              customer, and we have provied high quality
            </div>
          </div>
          <div className="section3-right w-[50%]">
            <div
              data-aos="zoom-in"
              onClick={(e) => {
                setPanal(panal === false ? true : false);
              }}
              style={panal === true ? { color: "red" } : {}}
              className="bg-white p-[19px] mt-[5px] cursor-pointer"
            >
              <MdKeyboardArrowRight
                style={panal === true ? { transform: "rotate(90deg)" } : {}}
                className="inline mr-[3px] text-[20px]"
              />
              Travel Guides
            </div>
            {panal && (
              <div className="item1 px-[35px] py-[15px] text-[15px]">
                In each country we have travel guides, they will help you
                throughout the tour and they are very friendly you can ask them
                any question and they will never mind
              </div>
            )}
            <div
              data-aos="zoom-in"
              onClick={(e) => {
                setPanal2(panal2 === false ? true : false);
              }}
              style={panal2 === true ? { color: "red" } : {}}
              className="bg-white p-[19px] mt-[5px] cursor-pointer "
            >
              <MdKeyboardArrowRight
                style={panal2 === true ? { transform: "rotate(90deg)" } : {}}
                className="inline mr-[3px] text-[20px]"
              />
              5 Star Hotels
            </div>
            {panal2 && (
              <div className="px-[35px] py-[15px] text-[15px]">
                We have contracted with 5-star hotels in the available
                destinations, in those hotels, you will have all facilities
              </div>
            )}
            <div
              data-aos="zoom-in"
              onClick={(e) => {
                setPanal3(panal3 === false ? true : false);
              }}
              style={panal3 === true ? { color: "red" } : {}}
              className="bg-white p-[19px] mt-[5px] cursor-pointer "
            >
              <MdKeyboardArrowRight
                style={panal3 === true ? { transform: "rotate(90deg)" } : {}}
                className="inline mr-[3px] text-[20px]"
              />
              Free Diner
            </div>
            {panal3 && (
              <div className="px-[35px] py-[15px] text-[15px]">
                Some of our packages have free diner for that you can check our
                packages
              </div>
            )}
            <div
              data-aos="zoom-in"
              onClick={(e) => {
                setPanal4(panal4 === false ? true : false);
              }}
              style={panal4 === true ? { color: "red" } : {}}
              className="bg-white p-[19px] mt-[5px] cursor-pointer "
            >
              <MdKeyboardArrowRight
                style={panal4 === true ? { transform: "rotate(90deg)" } : {}}
                className="inline mr-[3px] text-[20px]"
              />
              Rooms For Couples
            </div>
            {panal4 && (
              <div className="px-[35px] py-[15px] text-[15px]">
                We have good facilities for couples, in 5-star hotels, we room
                for couples, that's why peoples love our tours.
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="section4">
        <div className="review-user flex flex-wrap justify-between w-[1200px] mx-auto">
          <div
            className="review-user w-[31%] h-fit mt-[35px] bg-gray-100 px-[20px] py-[15px]"
            data-aos="zoom-in"
          >
            <div className="flex mt-[10px]">
              <div className="w-[20%]">
                <img
                  src={User1}
                  alt=""
                  className="w-[55px] h-[55px] rounded-[50%]"
                />
              </div>
              <div className="px-[10px] w-[80%]">
                <div className="name-user">Ali</div>
                <div className="quality flex">
                  <AiFillStar className="text-pink-500" />
                  <AiFillStar className="text-pink-500" />
                  <AiFillStar className="text-pink-500" />
                  <AiFillStar className="text-pink-500" />
                  <AiFillStar className="text-pink-500" />

                  <AiOutlineStar />
                </div>
                <div className="reviews-user-desc mt-[20px]">
                  That's great travel agency so far I see with great team and
                  user friendly
                </div>
              </div>
            </div>
          </div>
          <div
            className="review-user w-[31%] h-fit mt-[35px] bg-gray-100 px-[20px] py-[15px]"
            data-aos="zoom-in"
          >
            <div className="flex mt-[10px]">
              <div className="w-[20%]">
                <img
                  src={User2}
                  alt=""
                  className="w-[55px] h-[55px] rounded-[50%]"
                />
              </div>
              <div className="px-[10px] w-[80%]">
                <div className="name-user">Ali</div>
                <div className="quality flex">
                  <AiFillStar className="text-pink-500" />
                  <AiFillStar className="text-pink-500" />
                  <AiFillStar className="text-pink-500" />
                  <AiFillStar className="text-pink-500" />
                  <AiFillStar className="text-pink-500" />

                  <AiOutlineStar />
                </div>
                <div className="reviews-user-desc mt-[20px]">
                  I suggest travel friends to everyone because I love travel
                  friends
                </div>
              </div>
            </div>
          </div>{" "}
          <div
            className="review-user w-[31%] h-fit mt-[35px] bg-gray-100 px-[20px] py-[15px]"
            data-aos="zoom-in"
          >
            <div className="flex mt-[10px]">
              <div className="w-[20%]">
                <img
                  src={User3}
                  alt=""
                  className="w-[55px] h-[55px] rounded-[50%]"
                />
              </div>
              <div className="px-[10px] w-[80%]">
                <div className="name-user">Ali</div>
                <div className="quality flex">
                  <AiFillStar className="text-pink-500" />
                  <AiFillStar className="text-pink-500" />
                  <AiFillStar className="text-pink-500" />
                  <AiFillStar className="text-pink-500" />
                  <AiFillStar className="text-pink-500" />

                  <AiOutlineStar />
                </div>
                <div className="reviews-user-desc mt-[20px]">
                  One my favorite travel website
                </div>
              </div>
            </div>
          </div>{" "}
          <div
            className="review-user w-[31%] h-fit mt-[35px] bg-gray-100 px-[20px] py-[15px]"
            data-aos="zoom-in"
          >
            <div className="flex mt-[10px]">
              <div className="w-[20%]">
                <img
                  src={User4}
                  alt=""
                  className="w-[55px] h-[55px] rounded-[50%]"
                />
              </div>
              <div className="px-[10px] w-[80%]">
                <div className="name-user">Ali</div>
                <div className="quality flex">
                  <AiFillStar className="text-pink-500" />
                  <AiFillStar className="text-pink-500" />
                  <AiFillStar className="text-pink-500" />
                  <AiFillStar className="text-pink-500" />
                  <AiFillStar className="text-pink-500" />

                  <AiOutlineStar />
                </div>
                <div className="reviews-user-desc mt-[20px]">
                  I love the hotels which are associated with travel friends.
                </div>
              </div>
            </div>
          </div>{" "}
          <div
            className="review-user w-[31%] h-fit mt-[35px] bg-gray-100 px-[20px] py-[15px]"
            data-aos="zoom-in"
          >
            <div className="flex mt-[10px]">
              <div className="w-[20%]">
                <img
                  src={User5}
                  alt=""
                  className="w-[55px] h-[55px] rounded-[50%]"
                />
              </div>
              <div className="px-[10px] w-[80%]">
                <div className="name-user">Ali</div>
                <div className="quality flex">
                  <AiFillStar className="text-pink-500" />
                  <AiFillStar className="text-pink-500" />
                  <AiFillStar className="text-pink-500" />
                  <AiFillStar className="text-pink-500" />
                  <AiFillStar className="text-pink-500" />

                  <AiOutlineStar />
                </div>
                <div className="reviews-user-desc mt-[20px]">
                  I and my wife both are big fans of the travel friends website
                  because they have everything that you want, 5-star rooms,
                  friendly tour guides, cheap packages, and special discounts
                  for couples, my final words must do one tour with travel
                  friends after you also love travel friends.
                </div>
              </div>
            </div>
          </div>{" "}
          <div
            className="review-user w-[31%] h-fit mt-[35px] bg-gray-100 px-[20px] py-[15px]"
            data-aos="zoom-in"
          >
            <div className="flex mt-[10px]">
              <div className="w-[20%]">
                <img
                  src={User6}
                  alt=""
                  className="w-[55px] h-[55px] rounded-[50%]"
                />
              </div>
              <div className="px-[10px] w-[80%]">
                <div className="name-user">Ali</div>
                <div className="quality flex">
                  <AiFillStar className="text-pink-500" />
                  <AiFillStar className="text-pink-500" />
                  <AiFillStar className="text-pink-500" />
                  <AiFillStar className="text-pink-500" />
                  <AiFillStar className="text-pink-500" />

                  <AiOutlineStar />
                </div>
                <div className="reviews-user-desc mt-[20px]">
                  I love the facilities especially when I reached to USA, travel
                  friend's car was present there for me.
                </div>
              </div>
            </div>
          </div>{" "}
          <div
            className="review-user w-[31%] h-fit mt-[35px] bg-gray-100 px-[20px] py-[15px]"
            data-aos="zoom-in"
          >
            <div className="flex mt-[10px]">
              <div className="w-[20%]">
                <img
                  src={User7}
                  alt=""
                  className="w-[55px] h-[55px] rounded-[50%]"
                />
              </div>
              <div className="px-[10px] w-[80%]">
                <div className="name-user">Ali</div>
                <div className="quality flex">
                  <AiFillStar className="text-pink-500" />
                  <AiFillStar className="text-pink-500" />
                  <AiFillStar className="text-pink-500" />
                  <AiFillStar className="text-pink-500" />
                  <AiFillStar className="text-pink-500" />

                  <AiOutlineStar />
                </div>
                <div className="reviews-user-desc mt-[20px]">
                  Thank you travel friends for the great adventure.
                </div>
              </div>
            </div>
          </div>{" "}
          <div
            className="review-user w-[31%] h-fit mt-[35px] bg-gray-100 px-[20px] py-[15px]"
            data-aos="zoom-in"
          >
            <div className="flex mt-[10px]">
              <div className="w-[20%]">
                <img
                  src={User8}
                  alt=""
                  className="w-[55px] h-[55px] rounded-[50%]"
                />
              </div>
              <div className="px-[10px] w-[80%]">
                <div className="name-user">Ali</div>
                <div className="quality flex">
                  <AiFillStar className="text-pink-500" />
                  <AiFillStar className="text-pink-500" />
                  <AiFillStar className="text-pink-500" />
                  <AiFillStar className="text-pink-500" />
                  <AiFillStar className="text-pink-500" />

                  <AiOutlineStar />
                </div>
                <div className="reviews-user-desc mt-[20px]">
                  I did travel with some other agencies as well but travel
                  friends is more professional than others.
                </div>
              </div>
            </div>
          </div>
          <div
            className="review-user w-[31%] h-fit mt-[35px] bg-gray-100 px-[20px] py-[15px]"
            data-aos="zoom-in"
          >
            <div className="flex mt-[10px]">
              <div className="w-[20%]">
                <img
                  src={User9}
                  alt=""
                  className="w-[55px] h-[55px] rounded-[50%]"
                />
              </div>
              <div className="px-[10px] w-[80%]">
                <div className="name-user">Ali</div>
                <div className="quality flex">
                  <AiFillStar className="text-pink-500" />
                  <AiFillStar className="text-pink-500" />
                  <AiFillStar className="text-pink-500" />
                  <AiFillStar className="text-pink-500" />
                  <AiFillStar className="text-pink-500" />

                  <AiOutlineStar />
                </div>
                <div className="reviews-user-desc mt-[20px]">
                  100% recommended to everyone
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Section5 />
    </div>
  );
};

export default Home;
