import React from "react";
import { Box, Typography } from "@mui/material";
import "../../css/blogcard.css";
import { useNavigate } from "react-router-dom";

const BlogCard = (props) => {
  const navigate = useNavigate();
  console.log(props.blog_data);
  return (
    <Box
      onClick={() => {
        console.log(props.blog_data);
        navigate("/blog-viewer", {
          state: props.blog_data,
        });
      }}
      className="blog_card"
    >
      <div className="image_card">
        <img
          className="card_img"
          src={props.blog_data.imgUrl1}
          alt="this is image"
        />
      </div>
      <div className="card_data">
        <p id="card_date">08.08.2023</p>
        <p id="card_title">{props.blog_data.title}</p>
        <p className="card_para">{props.blog_data.para1.substr(0, 85)}...</p>
      </div>
    </Box>
  );
};

export default BlogCard;
