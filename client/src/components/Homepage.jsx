import React, { useEffect } from "react";

import Navbar from "./Navbar";
import Featured from "./Featured";
import Footer from "./Footer";
import PopularTopics from "./PopularTopics";
import { Box } from "@mui/material";
import "../../css/homepage.css";
import EditorPick from "./EditorPick";

const Homepage = () => {
  useEffect(() => {
    // scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <Featured />
      <PopularTopics />

      <Box className="single_featured">
        <button className="sgft_btn">FASHION</button>
        <p id="sgft_title">
          Richird Norton photorealistic rendering as real photos
        </p>
        <p id="sgft_para">
          Progressively incentivize cooperative systems through technically
          sound functionalities. The credibly productivate seamless data.
        </p>
        <p id="sgft_date">08.08.2023</p>
      </Box>

      <EditorPick />
      <Footer />
    </>
  );
};

export default Homepage;
