import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import "../../css/bloghorz.css";
import { useNavigate } from "react-router-dom";

const BlogHorizontal = (props) => {
  const blog_data = props.blog_data;
  // console.log(blog_data);

  const currentDate = new Date();
  const timestamp = new Date(blog_data.timestamp);
  const month = timestamp.toLocaleString("default", { month: "long" });
  const year = timestamp.getFullYear();
  const timeDiffHours = (currentDate - timestamp) / (1000 * 3600);
  const publish_time =
    timeDiffHours <= 24
      ? `${Math.ceil(timeDiffHours)} hours`
      : `${Math.ceil(timeDiffHours / 24)} days`;
  // console.log(timeDiffHours);

  const timetaken =
    (blog_data.para1.length + blog_data.para2.length) / (20 * 60);

  const navigate = useNavigate();
  return (
    <Box className="blog_cont">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box className="data">
          <Box className="head">
            <Typography id="txt_nam" className="txt_head">
              {blog_data.name}
            </Typography>
            <Typography style={{ marginLeft: "12px" }} className="txt_head">
              {publish_time} ago
            </Typography>
          </Box>
          <Typography
            onClick={() => {
              navigate("/blog-viewer", {
                state: blog_data,
              });
            }}
            id="title"
          >
            {blog_data.title}
          </Typography>
          <Typography id="para" variant="p">
            {blog_data.para1.slice(0, 180)}...
          </Typography>
          <div className="extra">
            <p style={{ color: "gray" }}>
              {month} {year}
            </p>
            <p id="ttr">{Math.ceil(timetaken)} min read</p>
            <p id="btn-tag">{blog_data.tag}</p>
          </div>
        </Box>
        <Box id="img_box">
          <img id="img_sml" src={blog_data.imgUrl1} alt="image" />
        </Box>
      </Box>
    </Box>
  );
};

export default BlogHorizontal;
