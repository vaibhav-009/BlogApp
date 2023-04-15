import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import "../../css/popular_topics.css";
import BlogCard from "./BlogCard";
import axios from "axios";

const PopularTopics = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const object = {
      tag: "",
    };
    axios
      .post("/api/tag", object, {
        headers: { "Content-type": "application/json" },
      })
      .then((res) => {
        console.log(res);
        setBlogs(res.data.slice(1, 5));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
          alignItems: "center",
        }}
      >
        {blogs.map((element) => {
          return <BlogCard blog_data={element} key={element._id} />;
        })}
      </Box>
    </Box>
  );
};

export default PopularTopics;
