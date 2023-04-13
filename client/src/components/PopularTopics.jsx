import React from "react";
import { Box, Typography } from "@mui/material";
import "../../css/popular_topics.css";
import BlogCard from "./BlogCard";

const PopularTopics = () => {
  return (
    <Box className="pop_top">
      <p id="pop_heading">Popular topics</p>
      <div id="topic_tags">
        <div id="main_tags">
          <p>All</p>
          <p>Adventure</p>
          <p>Travel</p>
          <p>Fashion</p>
          <p>Technology</p>
        </div>
        <div>
          <p>View All</p>
        </div>
      </div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </Box>
    </Box>
  );
};

export default PopularTopics;
