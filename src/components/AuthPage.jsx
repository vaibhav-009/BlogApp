import { Box, Button, Typography } from "@mui/material";
import React from "react";

const AuthPage = () => {
  return (
    <Box sx={{ height: "100vh" }}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          "-ms-transform": "translate(-50%, -50%)",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "row",
          height: "80%",
          width: "70%",
          borderRadius: "15px",
          boxShadow: "22px 23px 83px silver",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "45%",
            padding: "10px",
            margin: "20px",
          }}
        >
          <Typography sx={{ width: "70%", margin: "3px" }} variant="p">
            BlogHub
          </Typography>
          <Typography
            sx={{ width: "70%", fontSize: "20px", margin: "3px" }}
            variant="p"
          >
            Join Our Network
          </Typography>

          <Typography
            sx={{
              fontSize: "12px",
              width: "70%",
              margin: "2px 0px 15px 0px",
              color: "gray",
            }}
            variant="p"
          >
            We'd love to have you! Join our 100% remote network of creators &
            freelancers.
          </Typography>
          <button
            type="button"
            style={{
              transition: "background-color .3s, box-shadow .3s",
              width: "70%",
              padding: "12px 16px 12px 42px",
              border: "none",
              margin: "5px",
              borderRadius: "3px",
              boxShadow:
                "0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25)",

              color: "#757575",
              fontSize: "14px",
              fontWeight: "500",

              backgroundImage:
                "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=)",
              backgroundColor: "white",
              backgroundRepeat: "no-repeat",
              backgroundSize: "25px auto",
              backgroundPosition: "40px 8px",
            }}
          >
            Sign in with Google
          </button>
          <h6 style={{ margin: "10px", textAlign: "center" }}>Or</h6>

          <Box sx={{ width: "70%" }}>
            <label for="name">Name</label>
            <br />
            <input
              style={{
                width: "-webkit-fill-available",
                padding: "7px 7px 7px 7px",
                border: "none",
                margin: "5px",
                borderRadius: "3px",
                border: "1px solid silver",
                marginLeft: 0,

                color: "#757575",
                fontSize: "14px",
                fontWeight: "500",
              }}
              placeholder="Enter your name"
            />
            <br />
            <label for="email">Email</label>
            <br />
            <input
              style={{
                width: "-webkit-fill-available",
                padding: "7px 7px 7px 7px",
                border: "none",
                margin: "5px",
                borderRadius: "3px",
                border: "1px solid silver",
                marginLeft: 0,

                color: "#757575",
                fontSize: "14px",
                fontWeight: "500",
              }}
              placeholder="Enter your email"
            />
            <br />
            <label for="password">Password</label>
            <br />
            <input
              style={{
                width: "-webkit-fill-available",
                padding: "7px 7px 7px 7px",
                border: "none",
                margin: "5px",
                borderRadius: "3px",
                border: "1px solid silver",
                marginLeft: 0,

                color: "#757575",
                fontSize: "14px",
                fontWeight: "500",
              }}
              placeholder="set your password"
            />

            <Button
              sx={{
                color: "white",
                background: "black",
                width: "100%",
                marginTop: "4px",
                "&:hover": {
                  background: "#16213E",
                },
              }}
            >
              Sign up
            </Button>
          </Box>
        </Box>
        <Box sx={{ width: "55%", padding: "10px" }}>
          <img
            style={{
              objectFit: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              borderRadius: "35px 0px 35px 0px",
            }}
            height="100%"
            src="https://images.unsplash.com/photo-1573496799822-b0557c9e2f41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AuthPage;
