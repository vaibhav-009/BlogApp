import React from "react";
import "../../css/featured.css";
import { Box, Typography } from "@mui/material";
import banner from "../images/banner.png";
import { useNavigate } from "react-router-dom";

const Featured = () => {
  const navigate = useNavigate();
  return (
    <Box className="home">
      <Box className="left_featured">
        <p className="app_name">BlogApp</p>

        <p className="tagline">Share your thoughts, connect with the world</p>

        <Typography className="minitag">
          the power of blogging at your fingertips.
        </Typography>
        <Box className="btns">
          <button
            onClick={() => {
              navigate("/explore");
            }}
            id="btn-1"
          >
            Explore
          </button>
          <button
            id="btn-2"
            onClick={() => {
              navigate("/my-blogs");
            }}
          >
            Create
          </button>
        </Box>
      </Box>
      <Box className="right_featured">
        <img className="img-1" src={banner} alt="blogapp" />
      </Box>
    </Box>
  );
};

export default Featured;
