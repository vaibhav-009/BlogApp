import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./components/AuthPage";
import Blog from "./components/Blog";
import Blogs from "./components/Blogs";
import Featured from "./components/Featured";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route
        path="/home"
        element={
          <>
            <Navbar />
            <Featured link="https://rare-gallery.com/thumbs/4512305-lana-rhoades-model-women-brunette-trench-coat.jpg" />
            <Blogs />
          </>
        }
      />
    </Routes>
  );
};

export default App;
