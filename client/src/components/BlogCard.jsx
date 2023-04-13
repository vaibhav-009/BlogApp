import React from "react";
import { Box, Typography } from "@mui/material";
import "../../css/blogcard.css";

const BlogCard = () => {
  return (
    <Box className="blog_card">
      <div className="image_card">
        <img
          className="card_img"
          src="https://plus.unsplash.com/premium_photo-1663013123196-f83decee810f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          alt="this is image"
        />
      </div>
      <div className="card_data">
        <p id="card_date">08.08.2023</p>
        <p id="card_title">May this title help you doing your work</p>
        <p className="card_para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        </p>
      </div>
    </Box>
  );
};

export default BlogCard;
