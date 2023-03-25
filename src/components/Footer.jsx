import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        background: "black",
        color: "white",
        padding: "20px",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {" "}
            <Typography sx={{ fontSize: "20px" }}>BlogHub</Typography>{" "}
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ fontSize: "16px" }}>
            <Typography>Hero</Typography>
            <Box>
              <Typography sx={{ fontSize: "10px" }}>BlogHub</Typography>
              <Typography sx={{ fontSize: "10px" }}>BlogHub</Typography>
              <Typography sx={{ fontSize: "10px" }}>BlogHub</Typography>
              <Typography sx={{ fontSize: "10px" }}>BlogHub</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ fontSize: "16px" }}>
            <Typography>Hero</Typography>
            <Box>
              <Typography sx={{ fontSize: "10px" }}>BlogHub</Typography>
              <Typography sx={{ fontSize: "10px" }}>BlogHub</Typography>
              <Typography sx={{ fontSize: "10px" }}>BlogHub</Typography>
              <Typography sx={{ fontSize: "10px" }}>BlogHub</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ background: "red" }}> this is </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
