import React from "react";
import "../../css/featured.css";
import { Box, Typography } from "@mui/material";
import banner from "../images/banner.png";

const Featured = () => {
  return (
    <Box className="home">
      <Box className="left_featured">
        <p className="app_name">BlogApp</p>

        <p className="tagline">Share your thoughts, connect with the world</p>

        <Typography className="minitag">
          the power of blogging at your fingertips.
        </Typography>
        <Box className="btns">
          <button id="btn-1">Explore</button>
          <button id="btn-2">Create</button>
        </Box>
      </Box>
      <Box className="right_featured">
        <img className="img-1" src={banner} alt="blogapp" />
      </Box>
    </Box>
  );
};

export default Featured;
