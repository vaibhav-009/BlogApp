import { Box, Button, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/explore.css";
import BlogHorizontal from "./BlogHorizontal";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const Explore = () => {
  const { currentUser } = useContext(AuthContext);

  const name = currentUser.displayName;
  const email = currentUser.email;
  const photo_url = currentUser.photoURL;
  const [tag, setTag] = useState("Blogs");
  const [blogdata, setBlogdata] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const object = {
      tag: tag === "Blogs" ? "" : tag,
    };
    axios
      .post("/api/tag", object, {
        headers: { "Content-type": "application/json" },
      })
      .then((res) => {
        console.log(res);
        if (res.data.length == 0) {
          console.log("nothing to show");
        }
        setBlogdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [tag]);

  return (
    <Box className="exp_cont">
      <Box className="left_pane">
        <Box className="header">
          <Box className="navs">
            <Typography id="header">Blog App</Typography>
            <Typography
              className="nav_links"
              onClick={() => {
                navigate("/home");
              }}
            >
              Home
            </Typography>
            <Typography
              className="nav_links"
              onClick={() => {
                navigate("/my-blogs");
              }}
            >
              My Blogs
            </Typography>
            <Typography
              className="nav_links"
              onClick={() => {
                navigate("/explore");
              }}
            >
              Explore
            </Typography>
          </Box>
          <hr />
          <Box className="Blog_cat">
            <Typography className="topic">
              {tag == "" ? "Blogs" : tag}
            </Typography>
            <Typography>Filter</Typography>

            <div className="tab">
              <button
                onClick={() => {
                  setTag("");
                }}
                className="tab-buttons"
              >
                All
              </button>
              <button
                onClick={() => {
                  setTag("Technology");
                }}
                className="tab-buttons"
              >
                Technology
              </button>
              <button
                onClick={() => {
                  setTag("Programming");
                }}
                className="tab-buttons"
              >
                Programming
              </button>
              <button
                onClick={() => {
                  setTag("Science");
                }}
                className="tab-buttons"
              >
                Science
              </button>
              <button
                onClick={() => {
                  setTag("Blockchain");
                }}
                className="tab-buttons"
              >
                Blockchain
              </button>
              <button
                onClick={() => {
                  setTag("Metaverse");
                }}
                className="tab-buttons"
              >
                Metaverse
              </button>
            </div>
          </Box>
        </Box>
        <div>
          {blogdata.length == 0 ? (
            <div
              style={{
                fontSize: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "40vh",
                marginTop: "30px",
                color: "silver",
              }}
            >
              <p style={{ fontFamily: '"Quicksand", sans-serif' }}>
                Nothing to show
              </p>
            </div>
          ) : (
            <Box className="content">
              {blogdata.map((element) => {
                return <BlogHorizontal blog_data={element} key={element._id} />;
              })}
            </Box>
          )}
        </div>
      </Box>
      <Box className="right_pane">
        <div className="user_card">
          <img id="user_img" src={photo_url} alt={name} />
          <p className="usr_txt">{name}</p>
          <p className="usr_txt">{email}</p>
        </div>
      </Box>
    </Box>
  );
};

export default Explore;
