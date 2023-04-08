import { Box, Button, Typography } from "@mui/material";
import React from "react";
import "../../css/featured.css";
import BlogPic from "../../src/images/Blog.png"
import Explore from "../../src/images/bloglogin.webp"
import MyBlg from "../../src/images/myblogs1.png"


function Featured(props) {
  return (
    <Box id="featured_sec" >
      <Box id="left_sec">
        <img style={{height:'auto',width:'95%'}} id="left_img" src={BlogPic} />
      </Box>
      <Box id="right_sec">
        
        <img style={{objectFit:'cover', height:'200px',width:'100%'}} src={Explore}/>
        <img style={{objectFit:'cover', height:'200px',width:'100%'}} src={MyBlg}/>
      </Box>
    </Box>
  );
}

export default Featured;
