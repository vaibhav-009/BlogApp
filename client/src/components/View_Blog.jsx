import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../css/viewblog.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const View_Blog = () => {
  useEffect(() => {
    // scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);
  const { state } = useLocation();
  console.log(state);
  const title = state.title;
  const tag = state.tag;
  const para1 = state.para1;
  const para2 = state.para2;
  const image1Url = state.imgUrl1;
  const image2Url = state.imgUrl2;
  console.log(image1Url);
  return (
    <>
      <Navbar />
      <div className="blog_div">
        <div className="head_blog">
          <p style={{ color: "#00ACED" }}>{tag}</p>
          <h1 id="blgvw_title">{title}</h1>
          <img className="blog_view_img1" alt="pic_1" src={image1Url} />
        </div>
        <p id="blgvw_p1">{para1}</p>
        <img className="blog_view_img1" alt="pic_2" src={image2Url} />
        <p id="blgvw_p1">{para2}</p>
      </div>
      <Footer />
    </>
  );
};

export default View_Blog;
