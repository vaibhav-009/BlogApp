import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const MyBlogs = () => {
  const navigate = useNavigate();

  const arr = [];
  return (
    <>
      <Navbar />
      <Box
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
      ></Box>
      {arr.length > 0 && <Box>hello</Box>}
    </>
  );
};

export default MyBlogs;
