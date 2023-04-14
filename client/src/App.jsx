import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./components/AuthPage";
import BlogEditor from "./components/BlogEditor";
import Explore from "./components/Explore";
import Homepage from "./components/Homepage";
import MyBlogs from "./components/MyBlogs";
import View_Blog from "./components/View_Blog";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/editor" element={<BlogEditor />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/my-blogs" element={<MyBlogs />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/blog-viewer" element={<View_Blog />} />
    </Routes>
  );
};

export default App;
