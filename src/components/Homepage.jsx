import React from "react";

import Navbar from "./Navbar";
import Featured from "./Featured";
import Blogs from "./Blogs";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Featured link="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" />
      <Blogs />
      {/* <Footer /> */}
    </>
  );
};

export default Homepage;
