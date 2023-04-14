import React from "react";
import "../../css/blogcard2.css";

const BlogCard2 = (props) => {
  const details = props.details;
  return (
    <div className="bcard2" style={{backgroundImage: `url(${details.url})`}}>
      <div className="overlay">
        <div className="bcard2_tag">{details.tag}</div>

        <div className="bcard2_data">
          <div className="bcard2_date">{details.date}</div>
          <div className="bcard2_title">{details.title}</div>
          <div className="bcard2_para">{details.para}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard2;
