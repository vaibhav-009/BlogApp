import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/myblogs.css";
import Navbar from "./Navbar";

const MyBlogs = () => {
  const navigate = useNavigate();
  const [blogList, setBlogList] = useState([]);

  return (
    <>
      <Navbar />
      <Box>
        <Button
          onClick={() => {
            navigate("/editor");
          }}
        >
          Add new
        </Button>
      </Box>
    </>
  );
};

export default MyBlogs;

{
  /* <Box
        sx={{
          height: "50px",
          width: "50px",
          background: "gray",
          position: "absolute",
          bottom: "10px",
          clipPath: "circle(50% at 50% 50%)",
          color: "white",
        }}
        onClick={() => {
          navigate("/editor");
        }}
      ></Box>  */
}
