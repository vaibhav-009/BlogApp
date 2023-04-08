import {
  Avatar,
  Box,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Blog = (object) => {
  // console.log(object.data);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "280px",
      }}
    >
      <Box sx={{ height: "161px" }} id="blog_img">
        <img
          style={{
            height: "160px",
            width: "280px",
            objectFit: "cover",
            borderRadius: "2px",
          }}
          src="https://plus.unsplash.com/premium_photo-1663852297654-56d979cf72d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
        />
      </Box>
      <Box sx={{ padding: "10px", backgroundColor: "white" }}>
        <Typography
          sx={{
            width: "100%",
            fontSize: "18px",
            margin: "0px",
            fontWeight: "bold",
          }}
        >
          {object.data.title}
        </Typography>
        <Typography sx={{ color: "gray", fontSize: "12px" }} variant="p">
          {object.data.summary}
        </Typography>
        <Box
          sx={{
            height: "50px",
            marginTop: "5px",
            // background: "#5d5b8d",
            display: "flex",
            alignItems: "center",
            color: "black",
          }}
        >
          <ListItemAvatar>
            <Avatar
              alt={object.data.userdata.username}
              src={object.data.userdata.photoUrl}
              sx={{ width: 40, height: 40 }}
            />
          </ListItemAvatar>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
            }}
          >
            <Typography
              sx={{ fontSize: "12px", fontWeight: "semi-bold", color: "black" }}
            >
              {object.data.userdata.username}
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "gray" }}>
              {"20 Aug"}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Blog;
