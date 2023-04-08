import { Box, Typography } from "@mui/material";
import React from "react";
import Blog from "./Blog";
import { Data } from "../data";

const Blogs = () => {
  // const data = {
  //   title: "Title 1",
  //   summary:
  //     "suamrry is this is a ssjnk nkns knjd fknkdjn dhsnkj nskjfkjs dksk sklfh ksdgld",
  //   userdata: {
  //     username: "ved",
  //     photoUrl:
  //       "https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
  //   },
  // };
  return (
    <Box
      sx={{
        margin: "20px",
        background: "RGB(248, 250, 253)",
        padding: "25px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ fontSize: "12px", color: "gray" }}>
            Keep Reading
          </Typography>
          <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
            More Blogs we love
          </Typography>
        </Box>
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            width: "100px",
            height: "35px",
            padding: "0px 4px",
            borderRadius: "5px",
          }}
        >
          Read More
        </button>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-around", margin: "20px" }}
      >
        {Data.map((data) => (
          <Blog key={data.title} data={data} />
        ))}
      </Box>
    </Box>
  );
};

export default Blogs;
