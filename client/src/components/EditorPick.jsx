import React from "react";
import "../../css/editorpick.css";

import BlogCard2 from "./BlogCard2";

const obj = {
  tag:"Science",
  title: "May this title help you doing your work",
  date: "08.08.2023",
  url:"https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6_square.jpg",
  para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium"
}
const EditorPick = () => {
  return (
    <div className="edit_pick">
      <div className='heading'>Related Articles</div>
      <div className="cards">
      <BlogCard2 details={obj} />
      <BlogCard2 details={obj} />
      <BlogCard2 details={obj}/>
      </div>
    </div>
  );
};

export default EditorPick;
