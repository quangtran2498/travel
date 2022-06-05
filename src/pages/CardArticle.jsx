import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const CardArticle = ({ article }) => {
  const imgItem = `http://localhost:1337${article.attributes?.imageArticle?.data?.attributes?.url}`;

  return (
    <Link className="w-[25%]" to={`/locations/${article.id}`}>
      <div className=" px-[15px] mt-[30px] relative" data-aos="zoom-in">
        <div className="">
          <img src={imgItem} alt="" className="rounded-[20px]" />
        </div>
        <div className="absolute bottom-[15px] left-[30px] flex text-white">
          <FaMapMarkerAlt className="text-[24px] mr-[5px]" />
          <p className="text-[18px]">{article.attributes.location}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardArticle;
