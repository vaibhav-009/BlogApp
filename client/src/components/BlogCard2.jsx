import React from "react";
import "../../css/blogcard2.css";
import { useNavigate } from "react-router-dom";

const BlogCard2 = (props) => {
  const details = props.blog_data;
  const navigate = useNavigate();
  return (
    <div
      className="bcard2"
      style={{
        backgroundImage: `url(${details.imgUrl2})`,
      }}
    >
      <div className="overlay">
        <div className="bcard2_tag">{details.tag}</div>

        <div className="bcard2_data">
          <div className="bcard2_date">{details.date}</div>
          <div
            onClick={() => {
              console.log(props.blog_data);
              navigate("/blog-viewer", {
                state: props.blog_data,
              });
            }}
            className="bcard2_title"
          >
            {details.title}
          </div>
          <div className="bcard2_para">{details.para1.slice(0, 150)}...</div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard2;
