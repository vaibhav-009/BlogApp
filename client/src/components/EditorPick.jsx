import React, { useEffect, useState } from "react";
import "../../css/editorpick.css";
import BlogCard2 from "./BlogCard2";
import axios from "axios";

const EditorPick = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const object = {
      tag: "",
    };
    axios
      .post("/api/tag", object, {
        headers: { "Content-type": "application/json" },
      })
      .then((res) => {
        console.log(res);
        setBlogs(res.data.slice(1, 4));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="edit_pick">
      <div className="heading">Related Articles</div>
      <div className="cards">
        {blogs.map((element) => {
          return <BlogCard2 blog_data={element} key={element._id} />;
        })}
      </div>
    </div>
  );
};

export default EditorPick;
