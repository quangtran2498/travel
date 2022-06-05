import qs from "qs";
import React, { useEffect, useRef, useState } from "react";
import axiosClient from "../api/axiosClient";
import AOS from "aos";
import "aos/dist/aos.css";
import CardArticle from "./CardArticle";

AOS.init();

const Article = () => {
  const [articles, setArticles] = useState({
    data: [],
    meta: {},
  });
  useEffect(() => {
    const query = qs.stringify(
      {
        pagination: {
          page: 1,
          pageSize: 8,
        },
        populate: "*",
      },
      {
        encodeValuesOnly: true,
      }
    );
    axiosClient.get(`/locations?populate=*?${query}`).then((response) => {
      setArticles(response);
    });
  }, []);
  // console.log(articles);
  return (
    <div className="flex flex-wrap mt-[100px] w-[1200px]">
      {articles.data.map((article, index) => (
        <CardArticle article={article} key={index} />
      ))}
    </div>
  );
};

export default Article;
