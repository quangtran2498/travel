import React, { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";
import { useParams } from "react-router-dom";
import "../style/ArticleDetail.css";
import qs from "qs";
import CardCity from "./CardCity";
const ArticleDetail = () => {
  const { id } = useParams();
  const [detailArticle, setDetailArticle] = useState({
    data: {
      attributes: {},
      id: "",
    },

    meta: {},
  });
  const [citys, setCity] = useState({
    data: [],
    meta: {},
  });
  useEffect(
    (location) => {
      axiosClient.get(`/locations/${id}?populate=*`).then((response) => {
        setDetailArticle(response);
      });
    },
    [id]
  );
  const location = detailArticle.data?.attributes?.type;
  // console.log(location);

  useEffect(() => {
    const query = qs.stringify(
      {
        pagination: {
          page: 1,
          pageSize: 3,
        },
        populate: "*",
        filters: {
          types: {
            $eq: location,
          },
        },
      },
      {
        encodeValuesOnly: true,
      }
    );
    axiosClient.get(`/cities?${query}`).then((response) => setCity(response));
  }, [location]);
  //

  // console.log(citys);
  //   console.log(detailArticle);
  const imgItem = `http://localhost:1337${detailArticle.data.attributes?.imageTitle?.data?.attributes?.url}`;

  return (
    <div className="pb-[100px] article-detail ">
      <div className="article-bg relative">
        <div className="overlay absolute"></div>
        <img
          src={imgItem}
          alt=""
          className="bg-article-detail w-full h-[100vh]"
        />
        <div className="absolute uppercase text-[50px] font-bold text-white top-[50%] right-[50%] z-10">
          {detailArticle.data?.attributes?.location}
        </div>
      </div>
      <div className="w-[1200px] mx-auto pt-[100px]">
        <div className="article-content ">
          <div className="text-[20px] text-red-500 mb-[50px]">OverView</div>
          <div className="article-detail-content-decs mb-[50px] w-[700px] leading-[2] text-[#777]">
            {detailArticle.data?.attributes?.title}
          </div>
          <div className="text-[20px] text-red-500">Good to know</div>
        </div>
        <div className="w-[700px] mt-[80px] text-[#777]">
          <div className="flex justify-between py-[16px] border-b-[1px] border-dashed border-[#ccc]">
            <p className="language">Language</p>
            <p className="language-nation">
              {detailArticle.data?.attributes?.Language}
            </p>
          </div>
          <div className="flex justify-between mt-[10px] py-[16px] border-b-[1px] border-dashed border-[#ccc]">
            <p className="language">Currency</p>
            <p className="language-nation">
              {detailArticle.data?.attributes?.Currency}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 card-city">
        <div className=" w-[1200px] mx-auto">
          <div className="text-[20px] text-red-500 uppercase pb-[80px]">
            Cities in {detailArticle.data?.attributes?.type}
          </div>
          <div className="card-city-content w-[800px] flex justify-between">
            {citys.data.map((city, index) => (
              <CardCity data={city} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
