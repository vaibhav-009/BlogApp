import React from "react";
import "../../css/blogcard2.css";

const BlogCard2 = () => {
  return (
    <div className="bcard2">
      <div className="overlay">
        <div className="bcard2_tag">Science</div>

        <div className="bcard2_data">
          <p id="bcard2_date">08.08.2023</p>
          <p id="bcard2_title">May this title help you doing your work</p>
          <p className="bcard2_para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard2;
