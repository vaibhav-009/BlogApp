import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/explore.css";
import BlogHorizontal from "./BlogHorizontal";
import Navbar from "./Navbar";

const Explore = () => {
  const navigate = useNavigate();
  return (
    <Box className="exp_cont">
      <Box className="left_pane">
        <Box className="header">
          <Box className="navs">
            <Typography id="header">Blog App</Typography>
            <Typography
              className="nav_links"
              onClick={() => {
                navigate("/home");
              }}
            >
              Home
            </Typography>
            <Typography className="nav_links">My Blogs</Typography>
            <Typography className="nav_links">Explore</Typography>
          </Box>
          <hr />
          <Box className="Blog_cat">
            <Typography className="topic">Blog</Typography>
            <Typography>Filter</Typography>

            <div className="tab">
              <button className="tab-buttons">Design</button>
              <button className="tab-buttons">Technology</button>
              <button className="tab-buttons">Programming</button>
              <button className="tab-buttons">Crypto</button>
              <button className="tab-buttons">Blockchain</button>
              <button className="tab-buttons">Metaverse</button>
            </div>
          </Box>
        </Box>
        <Box className="content">
          <BlogHorizontal />
          <BlogHorizontal />
          <BlogHorizontal />
        </Box>
      </Box>
      <Box className="right_pane">THis is right left_pane</Box>
    </Box>
  );
};

export default Explore;
