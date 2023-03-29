import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./components/AuthPage";
import BlogEditor from "./components/BlogEditor";
import Explore from "./components/Explore";
import Homepage from "./components/Homepage";
import MyBlogs from "./components/MyBlogs";
import Blog_1 from "./components/Templates/Blog_1";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/editor" element={<BlogEditor />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/my-blogs" element={<MyBlogs />} />
      <Route path="/explore" element={<Explore />}/>
      <Route path="/blog-1" element={<Blog_1 />} />
    </Routes>
  );
};

export default App;
