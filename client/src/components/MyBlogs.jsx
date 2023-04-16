import { Box, Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../css/myblogs.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AuthContext } from "../context/AuthContext";
import AddIcon from "@mui/icons-material/Add";
import BlogCard2 from "./BlogCard2";

const MyBlogs = () => {
  const navigate = useNavigate();
  const [blogList, setBlogList] = useState([]);
  const { currentUser } = useContext(AuthContext);
  var email = currentUser.email;

  useEffect(() => {
    if (email) {
      var ind = email.indexOf("@");
      var userId = email.substring(0, ind);

      async function fetch_data() {
        try {
          const request = await axios.post("/api/user_blogs", { userId });
          setBlogList(request.data);
        } catch (err) {
          console.log(err);
        }
      }
      fetch_data();
    }
  }, [email]);

  return (
    <>
      <Navbar />
      <div className="my_blg_box">
        <div className="add_button">
          <Button
            id="button_"
            onClick={() => {
              navigate("/editor");
            }}
          >
            <span className="text">Add new Blog</span>
            <span className="icon">
              <AddIcon fontSize="large" />
            </span>
          </Button>
        </div>

        <div className="myblg_cards">
          {blogList.map((element) => {
            return <BlogCard2 blog_data={element} key={element._id} />;
          })}
        </div>
      </div>
      <div
        style={
          blogList.length == 0
            ? { position: "absolute", width: "100%", bottom: 0 }
            : {}
        }
      >
        <Footer />
      </div>
    </>
  );
};

export default MyBlogs;
