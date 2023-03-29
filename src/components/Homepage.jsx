import React from "react";

import Navbar from "./Navbar";
import Featured from "./Featured";
import Blogs from "./Blogs";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Featured />
      <Blogs />
      <Footer />
    </>
  );
};

export default Homepage;
