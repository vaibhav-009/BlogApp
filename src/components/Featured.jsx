import { Box } from "@mui/material";
import React from "react";
import "../../css/featured.css";

function Featured(props) {
  return (
    <Box
      className="featured_blog"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
          ${props.link}
      )`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="featured_blog_contents">
        {/* title */}
        <h1 className="featured_blog_title">{"Title"}</h1>
        {/* div > 2 buttons */}
        <div className="featured_blog_buttons">
          <button className="featured_blog_button">Read</button>
        </div>
        {/* desciption */}
        <h1 className="featured_blog_description">
          {
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et    commodi est quae corporis, voluptas facere cumque magni vero ipsumdolores pariatur quia natus eaque, molestias labore. Nihiladipisci illo quos."
          }
        </h1>
      </div>
      <div className="featured_blog_fadeBottom"></div>
    </Box>
  );
}

export default Featured;
